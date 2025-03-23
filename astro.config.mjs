import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sitemap()
  ],
  site: process.env.PUBLIC_SITE_URL,
  image: {
    service: {
      entrypoint: 'sharp'
    },
    defaults: {
      quality: 80,
      format: 'webp',
    }
  },
  vite: {
    build: {
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
          }
        }
      },
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
    ssr: {
      noExternal: ['@astrojs/*']
    }
  },
});
