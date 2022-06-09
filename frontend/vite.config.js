
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
  ],
  // define: { 'process.env': {} },
  // resolve: {
  //   alias: {
  //     '@': resolve(__dirname, 'src'),
  //   },
  // },

  // root: resolve(__dirname, 'src'),
  mode: 'development',
  // publicDir: '/src/templates/',
  build: {
    emptyOutDir: true,
    outDir: resolve(__dirname, '../src/main/resources/public'),
    assetsDir: '',
    // rollupOptions: {
    //   input: resolve(__dirname, 'src', 'templates', 'index.html')
    // }
  }
  /* remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ]
  },
  */

})