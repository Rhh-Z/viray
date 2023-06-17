/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import JSX from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vue(), JSX()],
  test: {
    environment: 'happy-dom',
  },
})