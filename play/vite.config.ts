import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue"
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import dts from 'vite-plugin-dts';
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(),
  vueSetupExtend()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'components')
    }
  }
})