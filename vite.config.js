import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          'pdf-engine': ['pdf-lib', 'jspdf'],
          'vendor': ['react', 'react-dom', 'lucide-react']
        }
      }
    }
  }
});
