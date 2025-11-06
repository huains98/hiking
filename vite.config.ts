import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), unocss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  }
})
