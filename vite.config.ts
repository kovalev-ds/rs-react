/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      all: true,
      include: ['src/**/*.tsx'],
      reporter: 'text',
    },
  },
  resolve: {
    alias: [{ find: '~', replacement: path.resolve(__dirname, 'src') }],
  },
});
