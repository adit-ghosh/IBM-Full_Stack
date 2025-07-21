import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ibm/react/nursery-paradise/', // Must match your GitHub Pages path
  build: {
    outDir: 'dist',
    emptyOutDir: true
}
})
