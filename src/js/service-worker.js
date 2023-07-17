self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('my-cache').then(function (cache) {
      return cache.addAll([
        '/styles.css',
        '/src/js/index.js',
        // Add more resources to cache as needed
      ]);
    }),
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    }),
  );
});
