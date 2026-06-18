const CACHE_NAME = 'btltech-music-v2';
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/btltech.html',
  '/choko-king.html',
  '/lyrid.html',
  '/press-kit.html',
  '/contact.html',
  '/styles.css',
  '/script.js',
  '/assets/favicon.svg',
  '/site.webmanifest',
  '/assets/logo-btltech-music.svg',
  '/privacy-policy.html',
  '/terms-of-service.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.allSettled(
        CORE_ASSETS.map((asset) =>
          cache.add(asset).catch(() => {
            console.warn('[SW] Failed to cache:', asset);
          })
        )
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          return networkResponse;
        })
        .catch(() => {
          if (event.request.headers.get('accept').includes('text/html')) {
            return caches.match('/index.html');
          }
        });
    })
  );
});