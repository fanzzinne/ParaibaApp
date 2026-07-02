const CACHE_NAME = 'paraiba-v2';
const APP_PREFIX = '/ParaibaApp';

const ASSETS = [
  APP_PREFIX + '/',
  APP_PREFIX + '/index.html',
  APP_PREFIX + '/app.js',
  APP_PREFIX + '/manifest.json',
  APP_PREFIX + '/logo.png',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
