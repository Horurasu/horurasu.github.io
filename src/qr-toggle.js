(function () {
   var toggleBtn = document.getElementById('qrToggle');
   var panel = document.getElementById('qrPanel');
   var qrContainer = document.getElementById('qrCode');

   if (!toggleBtn || !panel || !qrContainer) return;

   var rendered = false;

   function setOpen(isOpen) {
      panel.classList.toggle('open', isOpen);
      toggleBtn.setAttribute('aria-expanded', isOpen);
   }

   toggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
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

      setOpen(!panel.classList.contains('open'));
   });

   document.addEventListener('click', function (e) {
      if (!panel.contains(e.target) && e.target !== toggleBtn) {
         setOpen(false);
      }
   });
})();
