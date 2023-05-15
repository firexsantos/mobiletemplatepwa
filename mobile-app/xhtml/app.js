self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('error.html').then((cache) => cache.addAll([
      '/mobile-app/xhtml/'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
