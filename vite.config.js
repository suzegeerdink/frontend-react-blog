import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://novi-backend-api-wgsgz.ondigitalocean.app/', // 👈 your API base URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
