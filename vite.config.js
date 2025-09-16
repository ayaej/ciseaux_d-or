import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/ciseaux_d-or/',
  build: { outDir: 'docs', emptyOutDir: true }
})
