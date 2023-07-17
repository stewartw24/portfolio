self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open('my-cache')
      .then((cache) => cache.addAll(['/styles.css', '/src/js/index.js']))
      .catch((error) => {
        console.error('Failed to add resources to cache:', error);
      }),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          if (
            !networkResponse ||
            networkResponse.status !== 200 ||
            networkResponse.type !== 'basic'
          ) {
            return networkResponse;
          }

          const responseToCache = networkResponse.clone();

          caches.open('my-cache').then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        })
        .catch((error) => {
          console.error('Failed to fetch resource:', error);
        });
    }),
  );
});
