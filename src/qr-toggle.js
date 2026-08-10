(function () {
   var toggleBtn = document.getElementById('qrToggle');
   var panel = document.getElementById('qrPanel');
   var qrContainer = document.getElementById('qrCode');

   if (!panel || !qrContainer) return;

   var rendered = false;
   var desktopQuery = window.matchMedia('(min-width: 1000px)');

   function renderQr() {
      if (!rendered) {
         new QRCode(qrContainer, {
            text: 'https://horurasu.github.io/',
            width: 140,
            height: 140,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.M
         });
         rendered = true;
      }
   }

   function setOpen(isOpen) {
      panel.classList.toggle('open', isOpen);
      if (toggleBtn) toggleBtn.setAttribute('aria-expanded', isOpen);
   }

   function toggleQrPanel() {
      renderQr();
      setOpen(!panel.classList.contains('open'));
   }

   window.toggleQrPanel = toggleQrPanel;

   function syncWithViewport() {
      if (desktopQuery.matches) {
         renderQr();
         setOpen(true);
      } else {
         setOpen(false);
      }
   }

   if (toggleBtn) {
      toggleBtn.addEventListener('click', function (e) {
         e.stopPropagation();
         toggleQrPanel();
      });
   }

   document.addEventListener('click', function (e) {
      if (desktopQuery.matches) return;
      var clickedToggle = toggleBtn && toggleBtn.contains(e.target);
      if (!panel.contains(e.target) && !clickedToggle) {
         setOpen(false);
      }
   });

   if (desktopQuery.addEventListener) {
      desktopQuery.addEventListener('change', syncWithViewport);
   } else if (desktopQuery.addListener) {
      desktopQuery.addListener(syncWithViewport);
   }

   syncWithViewport();
})();
