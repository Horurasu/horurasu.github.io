(function () {
   var toggleBtn = document.getElementById('shareToggle');
   var panel = document.getElementById('sharePanel');
   var toast = document.getElementById('shareToast');
   var copyBtn = document.getElementById('shareCopyBtn');

   if (!toggleBtn || !panel) return;

   var profileUrl = 'https://horurasu.github.io/';
   var shareText = 'Martín Joaquín Aguilar Muñoz | Ingeniero en Software';
   var toastTimeout;

   var shareLinks = {
      whatsapp: 'https://wa.me/?text=' + encodeURIComponent(shareText + ' ' + profileUrl),
      facebook: 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(profileUrl),
      x: 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(profileUrl) + '&text=' + encodeURIComponent(shareText)
   };

   function setOpen(isOpen) {
      panel.classList.toggle('open', isOpen);
      toggleBtn.setAttribute('aria-expanded', isOpen);
   }

   function showToast(message) {
      if (!toast) return;
      toast.textContent = message;
      toast.classList.add('visible');
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(function () {
         toast.classList.remove('visible');
      }, 2000);
   }

   toggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(!panel.classList.contains('open'));
   });

   panel.querySelectorAll('[data-share]').forEach(function (btn) {
      btn.addEventListener('click', function () {
         var type = btn.getAttribute('data-share');
         setOpen(false);

         if (type === 'qr') {
            if (window.toggleQrPanel) window.toggleQrPanel();
            return;
         }

         var url = shareLinks[type];
         if (url) window.open(url, '_blank', 'noopener');
      });
   });

   if (copyBtn) {
      copyBtn.addEventListener('click', function () {
         if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(profileUrl).then(function () {
               showToast('Enlace copiado');
            }).catch(function () {
               showToast('No se pudo copiar el enlace');
            });
         } else {
            showToast('No se pudo copiar el enlace');
         }
         setOpen(false);
      });
   }

   document.addEventListener('click', function (e) {
      if (!panel.contains(e.target) && e.target !== toggleBtn && !toggleBtn.contains(e.target)) {
         setOpen(false);
      }
   });
})();
