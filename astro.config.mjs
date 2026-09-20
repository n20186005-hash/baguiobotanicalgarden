import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://baguiobotanicalgarden.com',
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'tl',
        locales: {
          tl: 'tl-PH',
          en: 'en-US',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'tl',
    locales: ['tl', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  build: {
    assets: 'assets',
  },
  server: {
    host: true,
  },
});
