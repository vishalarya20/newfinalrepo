import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/url': {
        target: 'https://williamschickentrainingandsupport.com', // Replace with your actual API domain
        changeOrigin: true,
        secure: false, // Set to true if the API uses HTTPS with a valid SSL
      },
    },
  },
});
