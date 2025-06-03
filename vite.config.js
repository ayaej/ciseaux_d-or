import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: { outDir: 'docs', emptyOutDir: true }
})
