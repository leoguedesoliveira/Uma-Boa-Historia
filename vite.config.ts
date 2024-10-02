import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Uma-Boa-Historia",
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
