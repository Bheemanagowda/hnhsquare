import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  
  plugins: [react()],
    server: {
    port: 5174, // or whatever port you're using
    host: true, // VERY IMPORTANT for external access
    allowedHosts: ["edb0-2406-7400-56-2304-dd29-eed4-ea54-429.ngrok-free.app", '.loca.lt'], // allow all loca.lt URLs
    // allowedHosts: ['.loca.lt'], // allow all loca.lt URLs
  },
 
});
