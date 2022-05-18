import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    base:'/templates/',
    open:'/templates/'
  },
  root: resolve(__dirname, 'src'),
  plugins: [vue()],
  mode: 'development',
  publicDir: '/src/templates/',
  build: {
    emptyOutDir: false,
    outDir: resolve(__dirname, '../src/main/resources/'),
    assetsDir: 'static',
    rollupOptions: {
        input : resolve('src', 'templates', 'index.html')
    }
  },
  // devServer: {
  //   port: 4000,
  //   proxy: {
  //     '/': {
  //       target: 'http://localhost:8080',
  //       ws: true,
  //       changeOrigin: true
  //     }
  //   }
  // }
})
