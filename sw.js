const cacheName="version_x2",precacheResources=["/","manifest.json","icon-512x512.png","icon-192x192.png","icon-512x512.svg","icon-192x192.svg","apple-touch-icon.png"];self.addEventListener("install",e=>{e.waitUntil(caches.open("version_x2").then(e=>e.addAll(precacheResources)))}),addEventListener("activate",e=>{e.waitUntil(async function(){self.registration.navigationPreload&&await self.registration.navigationPreload.enable()}())}),addEventListener("fetch",e=>{e.respondWith(async function(){const t=await caches.match(e.request);if(t)return t;const a=await e.preloadResponse;return a||fetch(e.request)}())});
