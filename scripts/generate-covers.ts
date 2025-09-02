import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import { createCanvas } from 'canvas';

// Configuración
const OUTPUT_DIR = join(process.cwd(), 'public', 'blog', 'covers');
const WIDTH = 800;
const HEIGHT = 400;

// Datos de los posts del blog con elementos temáticos
const blogPosts = [
  {
    slug: 'que-es-ia-para-pymes',
    title: 'Qué es la IA para pymes',
    category: 'IA',
    color: '#1E90FF',
    theme: 'business-ai',
    elements: ['persona-empresario', 'robot-ayudante', 'graficos-ia']
  },
  {
    slug: 'guia-formaciones-ia-2025',
    title: 'Guía completa de formaciones en IA para 2025',
    category: 'Formación',
    color: '#FF6B6B',
    theme: 'education-learning',
    elements: ['estudiante', 'libros-ia', 'certificados', 'laptop']
  },
  {
    slug: 'herramientas-no-code-para-automatizar',
    title: 'Herramientas no-code para automatizar tu negocio',
    category: 'Herramientas',
    color: '#4ECDC4',
    theme: 'automation-tools',
    elements: ['persona-trabajando', 'engranajes', 'conectores', 'dashboard']
  },
  {
    slug: 'mejores-modelos-ia-por-caso-uso',
    title: 'Los mejores modelos de IA por caso de uso en 2025',
    category: 'IA',
    color: '#1E90FF',
    theme: 'ai-models',
    elements: ['cerebro-ia', 'persona-pensando', 'modelos-diferentes', 'casos-uso']
  },
  {
    slug: 'como-medir-roi-ia',
    title: 'Cómo medir el ROI de la IA en tu empresa',
    category: 'Negocio',
    color: '#45B7D1',
    theme: 'business-analytics',
    elements: ['analista-negocios', 'graficos-creciendo', 'calculadora', 'dinero']
  },
  {
    slug: 'prompt-engineering-practico',
    title: 'Prompt Engineering práctico: técnicas que funcionan',
    category: 'Formación',
    color: '#FF6B6B',
    theme: 'prompt-writing',
    elements: ['escritor', 'teclado-magico', 'palabras-flotando', 'luz-idea']
  }
];

// Función para dibujar elementos cartoon
function drawCartoonElement(ctx: any, element: string, x: number, y: number, size: number, color: string) {
  ctx.save();
  
  switch (element) {
    case 'persona-empresario':
      // Cabeza
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(x, y, size * 0.3, 0, 2 * Math.PI);
      ctx.fill();
      
      // Cuerpo
      ctx.fillStyle = color;
      ctx.fillRect(x - size * 0.2, y + size * 0.3, size * 0.4, size * 0.6);
      
      // Corbatín
      ctx.fillStyle = '#FF0000';
      ctx.fillRect(x - size * 0.1, y + size * 0.3, size * 0.2, size * 0.2);
      break;
      
    case 'robot-ayudante':
      // Cabeza cuadrada
      ctx.fillStyle = '#C0C0C0';
      ctx.fillRect(x - size * 0.3, y - size * 0.3, size * 0.6, size * 0.6);
      
      // Ojos
      ctx.fillStyle = '#00FF00';
      ctx.beginPath();
      ctx.arc(x - size * 0.15, y - size * 0.1, size * 0.08, 0, 2 * Math.PI);
      ctx.arc(x + size * 0.15, y - size * 0.1, size * 0.08, 0, 2 * Math.PI);
      ctx.fill();
      
      // Antena
      ctx.strokeStyle = '#C0C0C0';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x, y - size * 0.3);
      ctx.lineTo(x, y - size * 0.5);
      ctx.stroke();
      break;
      
    case 'estudiante':
      // Cabeza
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(x, y, size * 0.25, 0, 2 * Math.PI);
      ctx.fill();
      
      // Gorra de graduación
      ctx.fillStyle = '#000000';
      ctx.fillRect(x - size * 0.3, y - size * 0.4, size * 0.6, size * 0.15);
      
      // Cuerpo
      ctx.fillStyle = color;
      ctx.fillRect(x - size * 0.2, y + size * 0.25, size * 0.4, size * 0.5);
      break;
      
    case 'libros-ia':
      // Pila de libros
      const bookColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#1E90FF'];
      for (let i = 0; i < 4; i++) {
        ctx.fillStyle = bookColors[i];
        ctx.fillRect(x - size * 0.3 + i * 5, y + size * 0.1 - i * 3, size * 0.6, size * 0.4);
      }
      
      // Símbolo IA
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `bold ${size * 0.2}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText('IA', x, y + size * 0.3);
      break;
      
    case 'engranajes':
      // Engranaje principal
      ctx.strokeStyle = color;
      ctx.lineWidth = 4;
      ctx.beginPath();
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI * 2) / 8;
        const x1 = x + Math.cos(angle) * size * 0.3;
        const y1 = y + Math.sin(angle) * size * 0.3;
        const x2 = x + Math.cos(angle) * size * 0.4;
        const y2 = y + Math.sin(angle) * size * 0.4;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
      }
      ctx.stroke();
      
      // Centro del engranaje
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, size * 0.15, 0, 2 * Math.PI);
      ctx.fill();
      break;
      
    case 'cerebro-ia':
      // Forma de cerebro
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, size * 0.4, 0, Math.PI, true);
      
      // Lóbulos
      ctx.arc(x - size * 0.2, y - size * 0.2, size * 0.15, 0, 2 * Math.PI);
      ctx.arc(x + size * 0.2, y - size * 0.2, size * 0.15, 0, 2 * Math.PI);
      ctx.arc(x - size * 0.15, y + size * 0.1, size * 0.12, 0, 2 * Math.PI);
      ctx.arc(x + size * 0.15, y + size * 0.1, size * 0.12, 0, 2 * Math.PI);
      
      ctx.fill();
      break;
      
    case 'analista-negocios':
      // Cabeza
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(x, y, size * 0.25, 0, 2 * Math.PI);
      ctx.fill();
      
      // Lupa
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(x + size * 0.1, y + size * 0.1, size * 0.2, 0, 2 * Math.PI);
      ctx.stroke();
      
      // Mango de la lupa
      ctx.beginPath();
      ctx.moveTo(x + size * 0.3, y + size * 0.3);
      ctx.lineTo(x + size * 0.4, y + size * 0.4);
      ctx.stroke();
      break;
      
    case 'escritor':
      // Cabeza
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(x, y, size * 0.25, 0, 2 * Math.PI);
      ctx.fill();
      
      // Pluma mágica
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x - size * 0.3, y);
      ctx.lineTo(x + size * 0.3, y);
      ctx.stroke();
      
      // Plumas
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.ellipse(x + size * 0.3, y, size * 0.1, size * 0.05, 0, 0, 2 * Math.PI);
      ctx.fill();
      break;
      
    case 'teclado-magico':
      // Teclas
      const keys = ['A', 'I', 'P', 'R', 'O', 'M', 'P', 'T'];
      ctx.fillStyle = color;
      for (let i = 0; i < keys.length; i++) {
        const keyX = x - size * 0.3 + (i * size * 0.08);
        const keyY = y + (i % 2) * size * 0.05;
        ctx.fillRect(keyX, keyY, size * 0.06, size * 0.06);
        
        // Letra en la tecla
        ctx.fillStyle = '#FFFFFF';
        ctx.font = `bold ${size * 0.04}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillText(keys[i], keyX + size * 0.03, keyY + size * 0.04);
        ctx.fillStyle = color;
      }
      break;
      
    default:
      // Elemento genérico
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, size * 0.2, 0, 2 * Math.PI);
      ctx.fill();
  }
  
  ctx.restore();
}

// Función para generar imagen de portada
function generateCoverImage(post: any): Buffer {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Fondo degradado
  const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  gradient.addColorStop(0, '#1a1a1a');
  gradient.addColorStop(1, '#2d2d2d');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Patrón de puntos decorativos
  ctx.fillStyle = post.color + '20';
  for (let i = 0; i < 50; i++) {
    const x = Math.random() * WIDTH;
    const y = Math.random() * HEIGHT;
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  // Dibujar elementos temáticos
  const elementSize = 60;
  const positions = [
    { x: 120, y: 120 },
    { x: 280, y: 100 },
    { x: 450, y: 130 },
    { x: 600, y: 90 }
  ];

  post.elements.forEach((element: string, index: number) => {
    if (positions[index]) {
      drawCartoonElement(ctx, element, positions[index].x, positions[index].y, elementSize, post.color);
    }
  });

  // Categoría
  ctx.fillStyle = post.color;
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'left';
  ctx.fillText(post.category.toUpperCase(), 40, 60);

  // Título
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 32px Arial';
  ctx.textAlign = 'left';
  
  // Dividir el título en líneas si es muy largo
  const words = post.title.split(' ');
  let line = '';
  let y = 280;
  
  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' ';
    const metrics = ctx.measureText(testLine);
    
    if (metrics.width > WIDTH - 80 && line !== '') {
      ctx.fillText(line, 40, y);
      line = words[i] + ' ';
      y += 40;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, 40, y);

  // Logo Waynox con estilo cartoon
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 20px Arial';
  ctx.textAlign = 'right';
  ctx.fillText('WAYNOX STUDIO', WIDTH - 40, HEIGHT - 40);
  
  // Estrella decorativa
  ctx.fillStyle = post.color;
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const angle = (i * Math.PI * 2) / 5 - Math.PI / 2;
    const x = WIDTH - 80 + Math.cos(angle) * 15;
    const y = HEIGHT - 60 + Math.sin(angle) * 15;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();

  return canvas.toBuffer('image/jpeg', { quality: 0.9 });
}

// Función principal
async function main() {
  console.log('🚀 Iniciando generación de imágenes de portada con estilo cartoon...');
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
      console.log(`🎨 Generando portada cartoon para: ${post.slug}`);
      
      const imageBuffer = generateCoverImage(post);
      const outputPath = join(OUTPUT_DIR, `${post.slug}.jpg`);
      
      writeFileSync(outputPath, imageBuffer);
      console.log(`✅ Generado: ${outputPath}`);
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
    console.log('🎉 ¡Todas las imágenes de portada cartoon se generaron correctamente!');
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

export { generateCoverImage };
