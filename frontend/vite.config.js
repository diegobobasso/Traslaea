import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 👇 importante para despliegue en subcarpetas o hosting
  base: '/', 
  build: {
    outDir: 'dist', // carpeta que Vercel va a servir
  },
  server: {
    port: 5173, // opcional, útil en local
    open: true  // abre el navegador automáticamente
  }
})
