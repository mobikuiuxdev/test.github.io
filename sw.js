const cacheName = 'cwp_demo_01'; const precacheResources = ['manifest.json']; self.addEventListener('install', (event) => { console.log('Service worker install event!'); event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources))); });  addEventListener('activate', event => { event.waitUntil(async function() { if (self.registration.navigationPreload) { await self.registration.navigationPreload.enable(); } }()); });  addEventListener('fetch', event => { event.respondWith(async function() {  const cachedResponse = await caches.match(event.request); if (cachedResponse) return cachedResponse;  const response = await event.preloadResponse; if (response) return response;  return fetch(event.request); }()); });
