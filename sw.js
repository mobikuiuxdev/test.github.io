self.addEventListener("install",i=>{i.waitUntil(caches.open("v1").then(i=>i.addAll(["/","index.html","img/favicon-32x32.png","img/apple-touch-icon.png","img/icon-72x72.png","img/icon-96x96.png","img/icon-128x128.png","img/icon-144x144.png","img/icon-152x152.png","img/icon-192x192.png","img/icon-384x384.png","img/icon-512x512.png","img/maskable_icon.png","bg.webp","manifest.json"]).then(function(){console.log("Success! App is available offline!")})))}),self.addEventListener("fetch",i=>{i.respondWith(caches.match(i.request).then(n=>n||fetch(i.request)))});
