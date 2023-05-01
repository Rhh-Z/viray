import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue"
import SetupExtend from 'vite-plugin-vue-setup-extend'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(), SetupExtend()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'components')
    }
  }
})