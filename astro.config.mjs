import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://baguiobotanicalgarden.com',
  integrations: [
    tailwind(),
    sitemap({
      // Keep redirect stubs and low-value legal pages out of the index/sitemap.
      filter: (page) => {
        const path = new URL(page).pathname;
        if (path === '' || path === '/') return false;
        return !/(terms-of-service|privacy-policy|cookie-settings)/.test(path);
      },
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
