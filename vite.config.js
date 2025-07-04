import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config - base is only used if deploying to a sub-path (not usually needed on Vercel)
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/', // Use '/' for root deployment on Vercel
})
