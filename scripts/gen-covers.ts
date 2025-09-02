#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';
import glob from 'glob';
import matter from 'gray-matter';
import { generateCoverImage } from '../src/lib/openai-images';
import { buildPrompt, PostMetadata } from '../src/lib/coverPrompt';
import { processCoverImage } from '../src/lib/image';
import { validateEnvForApi } from '../src/lib/env';

interface CliOptions {
  slug?: string;
  all?: boolean;
  force?: boolean;
  dry?: boolean;
  help?: boolean;
}

interface BlogPost {
  filePath: string;
  metadata: PostMetadata;
  content: string;
}

/**
 * Parsea las opciones de línea de comandos
 */
function parseArgs(): CliOptions {
  const args = process.argv.slice(2);
  const options: CliOptions = {};

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    if (arg.startsWith('--slug=')) {
      options.slug = arg.split('=')[1];
    } else if (arg === '--slug' && i + 1 < args.length) {
      options.slug = args[++i];
    } else if (arg === '--all') {
      options.all = true;
    } else if (arg === '--force') {
      options.force = true;
    } else if (arg === '--dry') {
      options.dry = true;
    } else if (arg === '--help' || arg === '-h') {
      options.help = true;
    }
  }

  return options;
}

/**
 * Muestra la ayuda del script
 */
function showHelp(): void {
  console.log(`
🎨 Generador de Portadas de Blog - Waynox

Uso: npm run covers:one -- --slug=nombre-post
     npm run covers:all
     npm run covers:force

Opciones:
  --slug <nombre>    Generar portada solo para un post específico
  --all              Generar portadas para todos los posts
  --force            Regenerar portadas existentes
  --dry              Solo mostrar prompts sin generar imágenes
  --help, -h         Mostrar esta ayuda

Ejemplos:
  npm run covers:one -- --slug=que-es-ia-para-pymes
  npm run covers:all
  npm run covers:force -- --dry

Nota: Asegúrate de tener configurado OPENAI_API_KEY en tu archivo .env
`);
}

/**
 * Busca archivos MDX en el directorio de contenido
 */
async function findBlogPosts(): Promise<BlogPost[]> {
  try {
    // Buscar archivos MDX en diferentes ubicaciones posibles
    const patterns = [
      'content/blog/**/*.mdx',
      'content/blog/**/*.md',
      'src/content/blog/**/*.mdx',
      'src/content/blog/**/*.md',
      'blog/**/*.mdx',
      'blog/**/*.md'
    ];

    let foundFiles: string[] = [];
    
    for (const pattern of patterns) {
      try {
        const files = await new Promise<string[]>((resolve, reject) => {
          glob(pattern, (err, matches) => {
            if (err) reject(err);
            else resolve(matches || []);
          });
        });
        foundFiles.push(...files);
      } catch (error) {
        // Continuar con el siguiente patrón si falla
        continue;
      }
    }

    if (foundFiles.length === 0) {
      console.warn('⚠️  No se encontraron archivos MDX de blog. Verificando estructura...');
      
      // Mostrar estructura de directorios para debugging
      const dirs = ['content', 'src/content', 'blog'];
      for (const dir of dirs) {
        if (fs.existsSync(dir)) {
          console.log(`📁 Directorio encontrado: ${dir}`);
          try {
            const contents = fs.readdirSync(dir, { recursive: true });
            console.log(`   Contenido: ${contents.slice(0, 10).join(', ')}...`);
          } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            console.log(`   Error al leer: ${errorMessage}`);
          }
        }
      }
      
      return [];
    }

    // Eliminar duplicados y procesar archivos
    const uniqueFiles = [...new Set(foundFiles)];
    const posts: BlogPost[] = [];

    for (const filePath of uniqueFiles) {
      try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const { data, content: markdownContent } = matter(content);
        
        // Validar metadatos requeridos
        if (data.title && data.slug) {
          const metadata: PostMetadata = {
            title: data.title,
            category: data.category || 'tecnologia',
            tags: Array.isArray(data.tags) ? data.tags : [],
            date: data.date || new Date().toISOString(),
            slug: data.slug
          };
          
          posts.push({
            filePath,
            metadata,
            content: markdownContent
          });
        } else {
          console.warn(`⚠️  Post sin título o slug: ${filePath}`);
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error(`❌ Error al procesar ${filePath}: ${errorMessage}`);
      }
    }

    return posts;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(`Error al buscar posts del blog: ${errorMessage}`);
  }
}

/**
 * Genera una portada para un post específico
 */
async function generateCoverForPost(
  post: BlogPost,
  options: CliOptions
): Promise<void> {
  const { metadata } = post;
  const outputPath = path.join('public', 'blog', 'covers', `${metadata.slug}.png`);
  
  // Verificar si ya existe y no forzar regeneración
  if (fs.existsSync(outputPath) && !options.force) {
    console.log(`⏭️  Portada ya existe: ${metadata.slug}.png (usa --force para regenerar)`);
    return;
  }

  try {
    // Construir prompt
    const prompt = buildPrompt(metadata);
    
    if (options.dry) {
      console.log(`\n📝 PROMPT para "${metadata.title}":`);
      console.log(`   Slug: ${metadata.slug}`);
      console.log(`   Categoría: ${metadata.category}`);
      console.log(`   Tags: ${metadata.tags.join(', ')}`);
      console.log(`   Prompt: ${prompt.substring(0, 200)}...`);
      return;
    }

    // Validar API key solo cuando se necesita
    validateEnvForApi();

    console.log(`\n🎨 Generando portada para: ${metadata.title}`);
    console.log(`   Slug: ${metadata.slug}`);
    console.log(`   Categoría: ${metadata.category}`);
    console.log(`   Tags: ${metadata.tags.join(', ')}`);

    // Generar imagen con OpenAI
    const result = await generateCoverImage({
      prompt,
      size: '1792x1024',
      quality: 'standard',
      style: 'vivid'
    });

    console.log(`✅ Imagen generada por OpenAI`);
    if (result.revisedPrompt) {
      console.log(`   Prompt revisado: ${result.revisedPrompt.substring(0, 100)}...`);
    }

    // Procesar imagen (redimensionar y aplicar logo)
    const logoPath = path.join('src', 'assets', 'logo-waynox.png');
    await processCoverImage(result.buffer, outputPath, logoPath);

    console.log(`🎉 Portada generada exitosamente: ${metadata.slug}.png`);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`❌ Error al generar portada para ${metadata.slug}: ${errorMessage}`);
    
    // En modo dry, no fallar por errores de API
    if (!options.dry) {
      throw error;
    }
  }
}

/**
 * Función principal
 */
async function main(): Promise<void> {
  try {
    const options = parseArgs();

    if (options.help) {
      showHelp();
      return;
    }

    console.log('🚀 Iniciando generador de portadas de blog...\n');

    // Buscar posts del blog
    const posts = await findBlogPosts();
    
    if (posts.length === 0) {
      console.error('❌ No se encontraron posts del blog para procesar');
      console.log('\n💡 Sugerencias:');
      console.log('   - Verifica que exista el directorio content/blog/');
      console.log('   - Asegúrate de que los archivos MDX tengan frontmatter válido');
      console.log('   - Revisa la estructura de directorios mostrada arriba');
      return;
    }

    console.log(`📚 Encontrados ${posts.length} posts del blog\n`);

    // Filtrar posts según opciones
    let postsToProcess = posts;
    
    if (options.slug) {
      postsToProcess = posts.filter(post => post.metadata.slug === options.slug);
      if (postsToProcess.length === 0) {
        console.error(`❌ No se encontró post con slug: ${options.slug}`);
        console.log(`   Posts disponibles: ${posts.map(p => p.metadata.slug).join(', ')}`);
        return;
      }
      console.log(`🎯 Procesando post específico: ${options.slug}\n`);
    } else if (!options.all) {
      console.log('💡 Usa --all para procesar todos los posts o --slug para uno específico');
      return;
    }

    // Procesar posts
    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;

    for (const post of postsToProcess) {
      try {
        await generateCoverForPost(post, options);
        successCount++;
      } catch (error) {
        if (options.dry) {
          skipCount++;
        } else {
          errorCount++;
        }
      }
    }

    // Resumen final
    console.log('\n📊 Resumen de la generación:');
    console.log(`   ✅ Exitosas: ${successCount}`);
    console.log(`   ⏭️  Omitidas: ${skipCount}`);
    console.log(`   ❌ Errores: ${errorCount}`);
    
    if (options.dry) {
      console.log('\n💡 Modo DRY activado - No se generaron imágenes reales');
      console.log('   Ejecuta sin --dry para generar las portadas');
    }

    if (successCount > 0) {
      console.log(`\n🎉 ¡Portadas generadas en public/blog/covers/!`);
    }

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`\n💥 Error fatal: ${errorMessage}`);
    process.exit(1);
  }
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  main().catch(error => {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('💥 Error no manejado:', errorMessage);
    process.exit(1);
  });
}
