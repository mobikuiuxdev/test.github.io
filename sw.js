this.addEventListener('install', function(event) { event.waitUntil( caches.open('4-version-9').then(function(cache) { return cache.addAll(['manifest.json','icon-192x192.png','favicon-16x16.png','/']) .then(function() { console.log('Success! App is available offline!'); }) }) ); }); self.addEventListener('fetch', function(event) { event.respondWith( caches.match(event.request) .then(function(response) { return response || fetch(event.request); }) ); });
