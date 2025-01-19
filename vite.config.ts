import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Enables polling to detect file changes reliably
    },
    host: '0.0.0.0', // Makes the app accessible on the network
    port: 5173, 
  },
});
