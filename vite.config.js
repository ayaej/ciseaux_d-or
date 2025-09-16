import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
export default defineConfig({
  plugins: [react()],
  // Utiliser '/' comme base pour un domaine personnalisé
  base: '/',
  build: { 
    outDir: 'docs', 
    emptyOutDir: true,
    // Assurez-vous que les assets ont des URL relatives
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Pour les ressources comme CSS, JS, images
        assetFileNames: (assetInfo) => {
          return `assets/[name]-[hash][extname]`
        }
      }
    }
  }
})
