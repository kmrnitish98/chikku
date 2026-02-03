import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chikku/',   // 👈 repo ka exact naam
  plugins: [react()],
})