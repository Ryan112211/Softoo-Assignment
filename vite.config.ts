import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: process.env.PUBLIC_URL,
  preview: {
    host: '0.0.0.0',
    port: 3000,
  },
  server: {
    port: 3000,
  },
});
