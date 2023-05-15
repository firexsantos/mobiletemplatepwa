'use strict'
/* ============================
   PWA SERVICES WORKER REGISTER
=============================*/

if ('serviceWorker' in navigator) {
    //REGISTER A SERVICE WORKER HOSTED AT THE ROOT OF THE 
    //SITE USING THE DEFAULT SCOPE
    navigator.serviceWorker.register('service-worker.js').then(function (registration) {
        console.log('Service worker registration succeeded:', registration);
    }, /*CATCH*/ function (error) {
        console.log('Service worker registration failed:', error);
    });
} else {
    console.log('Service workers are not supported.');
}