// vite.config.ts
import {defineConfig, transformWithEsbuild} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    {
      name: 'treat-js-files-as-jsx',
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/))  return null

        // Use the exposed transform from vite, instead of directly
        // transforming with esbuild
        return transformWithEsbuild(code, id, {
          loader: 'jsx',
          jsx: 'automatic',
        })
      },
    },
    react()
  ],
  server: {
    port: 3000, // You can change this to your desired port
    open: true, // Automatically open the app in your default browser
  },
  resolve: {
    alias: {
      '@': '/src', // Example alias for cleaner imports
    },
  },
  build: {
    outDir: 'dist', // Output directory for the build
  },

  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },

});
