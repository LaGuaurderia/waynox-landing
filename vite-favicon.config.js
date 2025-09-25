// Configuración de favicons para Vite
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
