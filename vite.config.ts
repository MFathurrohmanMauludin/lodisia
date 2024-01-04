import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'google1f0e8001161825e8.html',
          dest: 'dist'
        },
        {
          src: 'robots.txt',
          dest: 'dist'
        }
      ]
    })
  ],
})
