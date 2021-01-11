const cacheName='notIMDB'
const filesToCache=['1.html','1.js','1.css','2.css','logo.png','/']

/*Start the service worker and cache all of the app's content */
self.addEventListener('install',(e)=>{
    e.waitUntil(
        caches.open(cacheName).then((cache)=>{
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cache content when offline */
self.addEventListener('fetch', (e)=>{
    e.respondWith(
        caches.match(e.request).then((response)=>{
            return response || fetch(e.request);
        })
    );
});