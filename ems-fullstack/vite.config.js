import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Makes sure undefined envs don’t crash the app
    __API_BASE_URL__: JSON.stringify(process.env.VITE_API_BASE_URL || "http://localhost:8080"),
  },
})
