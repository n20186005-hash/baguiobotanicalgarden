// Service worker for baguiobotanicalgarden.com
// Strategy: network-first for navigation, stale-while-revalidate for static assets.
const VERSION = 'baguio-botanical-garden-v1';
const STATIC_CACHE = `${VERSION}-static`;
const RUNTIME_CACHE = `${VERSION}-runtime`;

const SHELL_URLS = [
  '/tl/',
  '/en/',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

const OFFLINE_URL = '/tl/';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) =>
        Promise.allSettled(
          SHELL_URLS.map((url) => cache.add(new Request(url, { cache: 'reload' })))
        )
      )
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== STATIC_CACHE && k !== RUNTIME_CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function isAsset(url) {
  return (
    url.pathname.startsWith('/assets/') ||
    url.pathname.startsWith('/icons/') ||
    url.pathname.startsWith('/gallery/') ||
    /\.(?:css|js|mjs|png|jpe?g|webp|svg|ico|woff2?)$/i.test(url.pathname)
  );
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy)).catch(() => {});
          return response;
        })
        .catch(async () => {
          const cache = await caches.open(RUNTIME_CACHE);
          return (await cache.match(request)) || (await cache.match(OFFLINE_URL)) || Response.error();
        })
    );
    return;
  }

  if (isAsset(url)) {
    event.respondWith(
      caches.open(STATIC_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        const network = fetch(request)
          .then((response) => {
            if (response && response.status === 200 && response.type === 'basic') {
              cache.put(request, response.clone()).catch(() => {});
            }
            return response;
          })
          .catch(() => cached);
        return cached || network;
      })
    );
  }
});
