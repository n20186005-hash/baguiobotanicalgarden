import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://baguiobotanicalgarden.com',
  integrations: [tailwind()],
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
