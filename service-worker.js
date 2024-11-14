// service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('offline-cache').then((cache) => {
            return cache.addAll([
                './404.html',  
                './img/error404m-mobile.jpg', 
                './img/error404-desktop.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match('./404.html');
        })
    );
});
