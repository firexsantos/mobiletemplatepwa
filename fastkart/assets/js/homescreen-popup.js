(function ($) {

  /*=====================
     Pwa Installer Popup js
    ==========================*/
  var firstTime = localStorage.getItem("first_time");
  if (!firstTime) {
    $(window).on('load', function () {
      setTimeout(function () {
        $('.addtohome-popup').offcanvas('show');
      }, 3000);
    });
    localStorage.setItem("first_time", "1");
  }

  /*==========================
   add to home screen Btn js
   ==========================*/
  let deferredPrompt;

  window.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e;
  });

  const installApp = document.getElementById('installApp');

  installApp.addEventListener('click', async () => {
    if (deferredPrompt !== null) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        deferredPrompt = null;
      }
    }
  });
})(jQuery);