import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // base:'/templates/',
    // open:'/templates/',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 3030,
    proxy: {
      '/': {
        target: 'http://localhost:8080',
        // ws.js: true
      }
    }
  },
  root: resolve(__dirname, 'src'),
  mode: 'development',
  // publicDir: '/src/templates/',
  build: {
    emptyOutDir: false,
    outDir: resolve(__dirname, '../src/main/resources/'),
    assetsDir: 'static',
    rollupOptions: {
        input : resolve(__dirname, 'src', 'templates', 'index.html')
    }
  },

})
