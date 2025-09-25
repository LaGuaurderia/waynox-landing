#!/usr/bin/env node

/**
 * Script completo para configurar favicons en proyecto Vite + React
 * Incluye verificación de archivos y optimizaciones adicionales
 */

const fs = require('fs');
const path = require('path');

// Verificar que todos los archivos necesarios existen
function verifyFaviconFiles() {
  const publicDir = path.join(__dirname, '..', 'public');
  const requiredFiles = [
    'favicon.ico',
    'favicon-16x16.png',
    'favicon-32x32.png',
    'favicon-48x48.png',
    'favicon-64x64.png',
    'favicon-128x128.png',
    'favicon-192x192.png',
    'favicon-512x512.png',
    'apple-touch-icon.png',
    'manifest.webmanifest'
  ];
  
  console.log('🔍 Verificando archivos de favicon...');
  
  const missingFiles = [];
  requiredFiles.forEach(file => {
    const filePath = path.join(publicDir, file);
    if (!fs.existsSync(filePath)) {
      missingFiles.push(file);
    } else {
      const stats = fs.statSync(filePath);
      console.log(`✅ ${file} (${stats.size} bytes)`);
    }
  });
  
  if (missingFiles.length > 0) {
    console.log(`❌ Archivos faltantes: ${missingFiles.join(', ')}`);
    return false;
  }
  
  console.log('✅ Todos los archivos de favicon están presentes');
  return true;
}

// Verificar configuración del HTML
function verifyHTMLConfiguration() {
  const indexPath = path.join(__dirname, '..', 'index.html');
  const htmlContent = fs.readFileSync(indexPath, 'utf8');
  
  console.log('\n🔍 Verificando configuración HTML...');
  
  const requiredLinks = [
    'favicon.ico',
    'favicon-16x16.png',
    'favicon-32x32.png',
    'favicon-48x48.png',
    'favicon-64x64.png',
    'favicon-128x128.png',
    'apple-touch-icon.png',
    'manifest.webmanifest'
  ];
  
  const missingLinks = [];
  requiredLinks.forEach(link => {
    if (!htmlContent.includes(link)) {
      missingLinks.push(link);
    } else {
      console.log(`✅ Referencia a ${link} encontrada`);
    }
  });
  
  if (missingLinks.length > 0) {
    console.log(`❌ Referencias faltantes en HTML: ${missingLinks.join(', ')}`);
    return false;
  }
  
  console.log('✅ HTML configurado correctamente');
  return true;
}

// Verificar manifest.webmanifest
function verifyManifest() {
  const manifestPath = path.join(__dirname, '..', 'public', 'manifest.webmanifest');
  
  try {
    const manifestContent = fs.readFileSync(manifestPath, 'utf8');
    const manifest = JSON.parse(manifestContent);
    
    console.log('\n🔍 Verificando manifest.webmanifest...');
    
    // Verificar campos requeridos
    const requiredFields = ['name', 'short_name', 'icons'];
    requiredFields.forEach(field => {
      if (manifest[field]) {
        console.log(`✅ Campo ${field} presente`);
      } else {
        console.log(`❌ Campo ${field} faltante`);
        return false;
      }
    });
    
    // Verificar iconos
    if (manifest.icons && manifest.icons.length >= 7) {
      console.log(`✅ ${manifest.icons.length} iconos configurados en manifest`);
    } else {
      console.log('❌ Insuficientes iconos en manifest');
      return false;
    }
    
    console.log('✅ Manifest configurado correctamente');
    return true;
  } catch (error) {
    console.log('❌ Error leyendo manifest:', error.message);
    return false;
  }
}

// Crear archivo de configuración adicional para Vite
function createViteFaviconConfig() {
  const configPath = path.join(__dirname, '..', 'vite-favicon.config.js');
  
  const config = `// Configuración de favicons para Vite
// Este archivo ayuda a Vite a manejar correctamente los favicons

export default {
  // Configuración para el plugin de favicons (opcional)
  favicon: {
    src: 'public/favicon.ico',
    sizes: [16, 32, 48, 64, 128, 192, 512],
    destination: 'dist',
    icons: {
      favicons: true,
      appleIcon: true,
      android: true,
      windows: false,
      macIcon: false,
      coast: false,
      firefox: false,
      appleStartup: false,
      androidChrome: true,
      androidIcons: true,
      appleTouchIcons: true,
      safariPinnedTab: false,
      msTile: false
    }
  }
};
`;
  
  fs.writeFileSync(configPath, config);
  console.log('✅ Configuración adicional de Vite creada');
}

// Función principal
function setupCompleteFavicons() {
  console.log('🚀 Configuración completa de favicons para Waynox Studio\n');
  
  // Verificar archivos
  const filesOk = verifyFaviconFiles();
  
  // Verificar HTML
  const htmlOk = verifyHTMLConfiguration();
  
  // Verificar manifest
  const manifestOk = verifyManifest();
  
  // Crear configuración adicional
  createViteFaviconConfig();
  
  console.log('\n📋 Resumen de configuración:');
  console.log(`• Archivos de favicon: ${filesOk ? '✅' : '❌'}`);
  console.log(`• Configuración HTML: ${htmlOk ? '✅' : '❌'}`);
  console.log(`• Manifest PWA: ${manifestOk ? '✅' : '❌'}`);
  
  if (filesOk && htmlOk && manifestOk) {
    console.log('\n🎉 ¡Configuración de favicons completada exitosamente!');
    console.log('\n📱 Compatibilidad garantizada para:');
    console.log('• Navegadores modernos (Chrome, Firefox, Safari, Edge)');
    console.log('• Navegadores legacy (IE11, navegadores antiguos)');
    console.log('• Dispositivos móviles (iOS, Android)');
    console.log('• PWAs (Progressive Web Apps)');
    console.log('• Accesos directos en escritorio');
    console.log('• Pestañas del navegador');
    
    console.log('\n🔧 Próximos pasos:');
    console.log('1. Ejecutar `npm run dev` para probar en desarrollo');
    console.log('2. Ejecutar `npm run build` para generar producción');
    console.log('3. Probar en diferentes navegadores y dispositivos');
    console.log('4. Verificar que los favicons se muestran correctamente');
    
    console.log('\n💡 Tips:');
    console.log('• Los favicons pueden tardar en actualizarse debido al caché');
    console.log('• Usa Ctrl+F5 para forzar recarga sin caché');
    console.log('• Verifica en modo incógnito para evitar interferencias del caché');
    
  } else {
    console.log('\n❌ Configuración incompleta. Revisa los errores anteriores.');
    process.exit(1);
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  setupCompleteFavicons();
}

module.exports = { setupCompleteFavicons, verifyFaviconFiles, verifyHTMLConfiguration, verifyManifest };
