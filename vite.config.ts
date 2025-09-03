import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // Si despliegas en subcarpeta, define VITE_BASE=/subcarpeta/
    base: env.VITE_BASE || '/',
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './components'),
        '@lib': path.resolve(__dirname, './lib'),
      },
    },
    server: {
      port: 3001,
      open: true,
      headers: {
        'X-Content-Type-Options': 'nosniff',
      },
    },
    build: {
      outDir: 'dist',
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            animations: ['framer-motion'],
          },
        },
      },
      // Asegurar que los archivos estáticos se copien correctamente
      copyPublicDir: true,
    },
    optimizeDeps: {
      include: ['framer-motion'],
    },
    // Soporte para MDX
    assetsInclude: ['**/*.mdx'],
  }
})
