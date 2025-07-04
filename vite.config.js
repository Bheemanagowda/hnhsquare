import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config for production (Vercel-ready)
export default defineConfig({
  plugins: [react()],
})
