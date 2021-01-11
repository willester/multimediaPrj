const cacheName='notIMDB'
const filesToCache=['fantastic.html','movie.js','moviesStyle.css','moviesStyle2.css','nasu.html',
'player-empire.js','player-fantastic.js','player-python.js','player-godfather.js','python.html',
'sw.html','/']

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