import path from "path"
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import dotenv from 'dotenv'
dotenv.config() // load env vars from .env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: '8080',
  },
  define: {
    __REPL_SLUG__: `"${process.env.REPL_SLUG}"`,
    __REPL_OWNER__: `"${process.env.REPL_OWNER}"`,
  },  
});
