import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  // Relative paths so the built site works from a folder or zip without a server
  base: './',
  server: {
    port: 5173,
    open: '/engine-spares',
  },
  preview: {
    port: 4173,
    open: '/engine-spares',
  },
})
