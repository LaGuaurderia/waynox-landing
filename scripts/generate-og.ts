import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import OgCard from '../src/og/OgCard';
import { blogPosts } from '../src/lib/blog.data';

// Configuración
const OUTPUT_DIR = join(process.cwd(), 'public', 'og');
const FONT_PATH = join(process.cwd(), 'src', 'og', 'fonts', 'Inter-Regular.ttf');

// Función para cargar la fuente Inter
async function loadFont(): Promise<ArrayBuffer> {
  try {
    // Intentar cargar la fuente local
    if (existsSync(FONT_PATH)) {
      const fontBuffer = await import('fs').then(fs => fs.readFileSync(FONT_PATH));
      return fontBuffer.buffer;
    }
    
    // Fallback: descargar la fuente Inter TTF desde Google Fonts
    console.log('📥 Descargando fuente Inter TTF desde Google Fonts...');
    const response = await fetch(
      'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.ttf'
    );
    
    if (!response.ok) {
      throw new Error(`Error descargando fuente: ${response.statusText}`);
    }
    
    const arrayBuffer = await response.arrayBuffer();
    return arrayBuffer;
  } catch (error) {
    console.error('❌ Error cargando fuente:', error);
    throw error;
  }
}

// Función para generar imagen OG para un post
async function generateOgImage(post: any): Promise<void> {
  try {
    const { slug, title, category, date, tags } = post;
    
    console.log(`🎨 Generando OG para: ${slug}`);
    
    // Crear el componente React
    const element = OgCard({
      title,
      category,
      date,
      tags,
    });
    
    // Cargar la fuente
    const fontData = await loadFont();
    
    // Generar SVG con satori
    const svg = await satori(element, {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          weight: 400,
          style: 'normal',
        },
      ],
    });
    
    // Convertir SVG a PNG con resvg
    const resvg = new Resvg(svg);
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();
    
    // Asegurar que el directorio existe
    if (!existsSync(OUTPUT_DIR)) {
      mkdirSync(OUTPUT_DIR, { recursive: true });
    }
    
    // Guardar la imagen PNG
    const outputPath = join(OUTPUT_DIR, `${slug}.png`);
    writeFileSync(outputPath, pngBuffer);
    
    console.log(`✅ Generado: ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error generando OG para ${post.slug}:`, error);
  }
}

// Función principal
async function main() {
  console.log('🚀 Iniciando generación de imágenes OG...');
  console.log(`📁 Directorio de salida: ${OUTPUT_DIR}`);
  console.log(`📝 Posts a procesar: ${blogPosts.length}`);
  
  // Crear directorio de salida si no existe
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log('📁 Creado directorio de salida');
  }
  
  // Generar imagen para cada post
  let successCount = 0;
  let errorCount = 0;
  
  for (const post of blogPosts) {
    try {
      await generateOgImage(post);
      successCount++;
    } catch (error) {
      errorCount++;
      console.error(`❌ Error procesando ${post.slug}:`, error);
    }
  }
  
  // Resumen final
  console.log('\n📊 Resumen de generación:');
  console.log(`✅ Exitosos: ${successCount}`);
  console.log(`❌ Errores: ${errorCount}`);
  console.log(`📁 Imágenes guardadas en: ${OUTPUT_DIR}`);
  
  if (errorCount === 0) {
    console.log('🎉 ¡Todas las imágenes OG se generaron correctamente!');
  } else {
    console.log(`⚠️  ${errorCount} imágenes fallaron. Revisa los logs anteriores.`);
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  main().catch((error) => {
    console.error('💥 Error fatal:', error);
    process.exit(1);
  });
}

export { generateOgImage };
