import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Lokálně použije '/', pro GitHub Pages použije '/web-jahaf/'
  base: command === 'build' ? '/web-jahaf/' : '/',
}))
