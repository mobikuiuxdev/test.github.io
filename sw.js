self.addEventListener("install",i=>{i.waitUntil(caches.open("v1").then(i=>i.addAll(["/","bg.webp","manifest.json","icons/"]).then(function(){console.log("Success! App is available offline!")})))}),self.addEventListener("fetch",i=>{i.respondWith(caches.match(i.request).then(n=>n||fetch(i.request)))});
