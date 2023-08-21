import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [vanillaExtractPlugin()],
  build: {
    minify: 'terser',
    terserOptions: {
      module: true,
      toplevel: true,
      compress: {
        passes: 1,
      },
      mangle: {
        properties: {
          regex: /^_.+/,
        },
      },
      format: {
        wrap_func_args: false,
      },
    },
  },
});
