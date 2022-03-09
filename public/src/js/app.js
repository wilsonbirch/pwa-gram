// Check if user browser supports SW, if it does then register
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(() => {
        console.log('Service worker registered');
    });
};

// Defer the add app to homescreen banner to an event of our choosing
window.addEventListener('beforeinstallprompt', (e) =>{
    console.log('beforeinstallprompt fired');
    e.preventDefault();
    deferredPrompt = e;
    return false;
})