#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';
import { blogPosts } from '../src/lib/blog.data';
import { buildPrompt, PostMetadata } from '../src/lib/coverPrompt';
import { generateCoverImage } from '../src/lib/openai-images';
import { processCoverImage } from '../src/lib/image';
import { validateEnvForApi } from '../src/lib/env';

interface CliOptions {
  force?: boolean;
  dry?: boolean;
}

function parseArgs(): CliOptions {
  const args = process.argv.slice(2);
  const options: CliOptions = {};
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--force') options.force = true;
    if (arg === '--dry') options.dry = true;
  }
  return options;
}

function toMeta(post: any): PostMetadata {
  return {
    title: post.title,
    category: post.category || 'tecnologia',
    tags: Array.isArray(post.tags) ? post.tags : [],
    date: post.date || new Date().toISOString(),
    slug: post.slug,
  };
}

async function main() {
  const options = parseArgs();

  console.log('🚀 Iniciando generador de portadas desde blog.data.ts');
  console.log(`📚 Posts: ${blogPosts.length}`);

  const outputDir = path.join('public', 'blog', 'covers');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  if (!options.dry) validateEnvForApi();

  let success = 0;
  let skipped = 0;
  let failed = 0;

  for (const post of blogPosts) {
    const meta = toMeta(post);
    const outputPath = path.join(outputDir, `${meta.slug}.png`);

    if (fs.existsSync(outputPath) && !options.force) {
      console.log(`⏭️  Omitido (existe): ${meta.slug}.png (usa --force para regenerar)`);
      skipped++;
      continue;
    }

    const prompt = buildPrompt(meta);

    if (options.dry) {
      console.log(`\n📝 PROMPT [${meta.slug}]`);
      console.log(prompt);
      continue;
    }

    try {
      console.log(`\n🎨 Generando portada (cartoon) para: ${meta.title}`);
      const result = await generateCoverImage({
        prompt,
        size: '1792x1024',
        quality: 'standard',
        style: 'vivid',
      });

      const logoPath = path.join('src', 'assets', 'logo-waynox.png');
      await processCoverImage(result.buffer, outputPath, logoPath);
      console.log(`✅ Guardada: ${outputPath}`);
      success++;
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      console.error(`❌ Error en ${meta.slug}: ${msg}`);
      failed++;
    }
  }

  console.log(`\n📊 Resumen -> OK: ${success} | Skip: ${skipped} | Error: ${failed}`);
}

if (require.main === module) {
  main().catch(err => {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('💥 Error fatal:', msg);
    process.exit(1);
  });
}
