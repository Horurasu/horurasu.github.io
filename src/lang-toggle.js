(function () {
   var toggleBtn = document.getElementById('langToggle');
   var panel = document.getElementById('langPanel');

   if (!toggleBtn || !panel) return;

   function setOpen(isOpen) {
      panel.classList.toggle('open', isOpen);
      toggleBtn.setAttribute('aria-expanded', isOpen);
   }

   toggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(!panel.classList.contains('open'));
   });

   panel.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
         setOpen(false);
      });
   });

   document.addEventListener('click', function (e) {
      if (!panel.contains(e.target) && e.target !== toggleBtn && !toggleBtn.contains(e.target)) {
         setOpen(false);
      }
   });
})();
