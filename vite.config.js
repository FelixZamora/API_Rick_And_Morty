import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://FelixZamora.github.io/API_Rick_And_Morty/',
  plugins: [react()],
})
