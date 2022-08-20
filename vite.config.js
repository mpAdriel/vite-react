import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default ({ mode, command }) => {
  const isPro = mode === 'production';
  // const isBuild = command === 'build';

  return defineConfig({
    server: {
      open: true,
      host: true,
      port: isPro ? 4000 : 3000,
    },
    resolve: {
      alias: {
        '~bootstrap': './node_modules/bootstrap',
      },
    },
    plugins: [react()],
    build: {
      outDir: './build',
    },
  });
};
