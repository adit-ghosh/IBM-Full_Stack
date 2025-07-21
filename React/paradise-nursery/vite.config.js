import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 base: '/IBM-Full_Stack/React/paradise-nursery/',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
