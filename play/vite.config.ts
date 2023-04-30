import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue"
import DefineOptions from "unplugin-vue-define-options/vite";
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(), DefineOptions()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'components')
    }
  }
})