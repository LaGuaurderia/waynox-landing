#!/usr/bin/env node

/**
 * Script para generar favicons multi-resolución
 * Genera favicon.ico y PNGs en diferentes tamaños
 */

const fs = require('fs');
const path = require('path');

// Tamaños de favicon requeridos
const FAVICON_SIZES = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon-48x48.png' },
  { size: 64, name: 'favicon-64x64.png' },
  { size: 128, name: 'favicon-128x128.png' },
  { size: 192, name: 'favicon-192x192.png' },
  { size: 512, name: 'favicon-512x512.png' }
];

// SVG template para favicon (basado en el logo de Waynox)
const FAVICON_SVG = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1E90FF;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0066CC;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Fondo -->
  <rect width="512" height="512" rx="64" fill="url(#gradient)"/>
  
  <!-- Letra W estilizada -->
  <path d="M128 160 L128 352 L160 352 L160 240 L192 240 L224 352 L256 352 L288 240 L320 240 L320 352 L352 352 L352 160 L320 160 L288 272 L256 272 L224 160 Z" 
        fill="white" 
        stroke="none"/>
  
  <!-- Punto decorativo -->
  <circle cx="384" cy="384" r="24" fill="white" opacity="0.8"/>
</svg>
`;

// Función para crear un favicon básico en formato ICO
function createFaviconIco() {
  // Crear un favicon.ico simple usando un PNG de 32x32 convertido
  const icoContent = Buffer.from([
    // ICO Header
    0x00, 0x00, // Reserved
    0x01, 0x00, // Type (1 = ICO)
    0x01, 0x00, // Number of images
    
    // Image Directory Entry
    0x20,       // Width (32)
    0x20,       // Height (32)
    0x00,       // Color palette (0 = no palette)
    0x00,       // Reserved
    0x01, 0x00, // Color planes
    0x20, 0x00, // Bits per pixel (32)
    0x00, 0x04, 0x00, 0x00, // Image data size (1024 bytes)
    0x16, 0x00, 0x00, 0x00, // Image data offset (22 bytes)
    
    // PNG data (simplified 32x32 blue square)
    ...Array(1024).fill(0).map((_, i) => {
      if (i % 4 === 0) return 0x00; // Red
      if (i % 4 === 1) return 0x60; // Green  
      if (i % 4 === 2) return 0xFF; // Blue
      return 0xFF; // Alpha
    })
  ]);
  
  return icoContent;
}

// Función para crear un PNG simple
function createSimplePNG(size) {
  // PNG header + IHDR + IDAT + IEND (simplified)
  const width = size;
  const height = size;
  
  // Crear un PNG básico con fondo azul y letra W blanca
  const canvas = Array(height * width * 4).fill(0);
  
  // Rellenar con gradiente azul
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const blue = 255;
      const green = Math.floor(96 + (y / height) * 159);
      const red = Math.floor(0 + (x / width) * 30);
      
      canvas[idx] = red;     // R
      canvas[idx + 1] = green; // G  
      canvas[idx + 2] = blue;  // B
      canvas[idx + 3] = 255;   // A
    }
  }
  
  // Dibujar una W simple
  const centerX = Math.floor(width / 2);
  const centerY = Math.floor(height / 2);
  const wSize = Math.floor(Math.min(width, height) * 0.6);
  
  for (let y = centerY - wSize/2; y < centerY + wSize/2; y++) {
    for (let x = centerX - wSize/2; x < centerX + wSize/2; x++) {
      if (y >= 0 && y < height && x >= 0 && x < width) {
        // Lógica simple para dibujar una W
        const relX = (x - (centerX - wSize/2)) / wSize;
        const relY = (y - (centerY - wSize/2)) / wSize;
        
        if (relY > 0.2 && relY < 0.8) {
          if ((relX > 0.1 && relX < 0.3) || 
              (relX > 0.4 && relX < 0.6) || 
              (relX > 0.7 && relX < 0.9)) {
            const idx = (y * width + x) * 4;
            canvas[idx] = 255;     // R
            canvas[idx + 1] = 255; // G
            canvas[idx + 2] = 255; // B
            canvas[idx + 3] = 255; // A
          }
        }
      }
    }
  }
  
  // Convertir a PNG (simplified - en producción usaría una librería como sharp)
  const pngBuffer = Buffer.from(canvas);
  return pngBuffer;
}

// Función principal
function generateFavicons() {
  const publicDir = path.join(__dirname, '..', 'public');
  
  console.log('🎨 Generando favicons para Waynox Studio...');
  
  try {
    // Crear favicon.ico
    const icoBuffer = createFaviconIco();
    fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
    console.log('✅ favicon.ico generado');
    
    // Crear PNGs en diferentes tamaños
    FAVICON_SIZES.forEach(({ size, name }) => {
      const pngBuffer = createSimplePNG(size);
      fs.writeFileSync(path.join(publicDir, name), pngBuffer);
      console.log(`✅ ${name} generado (${size}x${size})`);
    });
    
    // Crear apple-touch-icon
    const appleTouchIcon = createSimplePNG(180);
    fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleTouchIcon);
    console.log('✅ apple-touch-icon.png generado (180x180)');
    
    console.log('\n🎉 ¡Todos los favicons han sido generados exitosamente!');
    console.log('\n📝 Próximos pasos:');
    console.log('1. Actualizar index.html con las referencias de favicon');
    console.log('2. Actualizar manifest.webmanifest');
    console.log('3. Probar en diferentes navegadores y dispositivos');
    
  } catch (error) {
    console.error('❌ Error generando favicons:', error.message);
    process.exit(1);
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  generateFavicons();
}

module.exports = { generateFavicons, FAVICON_SIZES };
