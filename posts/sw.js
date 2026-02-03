const CACHE_NAME = 'menteymetrica-v1';
const ASSETS = [
  '/',
  '/2026_01_28_PHQ9.html',
  '/styles.css',
  '/lib/jspdf.min.js',
];

// Instalación: Guardamos los archivos en la caché
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Estrategia Offline Puro: Primero caché, si no está, busca en red
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
