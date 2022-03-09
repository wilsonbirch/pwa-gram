// self keyword refers to the SW, install + activate triggered by the browser
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installing Service Worker... ', e);
});

self.addEventListener('activate', (e) => {
    console.log('[Service Worker] Actvating Service Worker... ', e);
    return self.clients.claim(); 
});

// fetch events triggered by the application (fetching images, ajax requests etc.)
self.addEventListener('fetch', (e) => {
    //console.log('[Service Worker] Fetching something... ', e);
    event.respondWith(fetch(e.request))
});