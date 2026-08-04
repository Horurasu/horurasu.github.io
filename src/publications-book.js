(function () {
   const pages = document.querySelectorAll('.pub-page');
   const dots = document.querySelectorAll('.pub-dot');
   const prevBtn = document.getElementById('pubPrev');
   const nextBtn = document.getElementById('pubNext');
   const stack = document.getElementById('pubBookStack');

   if (!pages.length || !prevBtn || !nextBtn || !stack) return;

   let current = 0;

   function showPage(index) {
      current = (index + pages.length) % pages.length;
      pages.forEach((page, i) => {
         page.classList.toggle('active', i === current);
      });
      dots.forEach((dot, i) => {
         dot.classList.toggle('active', i === current);
      });
   }

   prevBtn.addEventListener('click', () => showPage(current - 1));
   nextBtn.addEventListener('click', () => showPage(current + 1));
   dots.forEach((dot, i) => dot.addEventListener('click', () => showPage(i)));

   let touchStartX = 0;

   stack.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
   }, { passive: true });

   stack.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const delta = touchEndX - touchStartX;
      if (Math.abs(delta) > 40) {
         if (delta < 0) {
            showPage(current + 1);
         } else {
            showPage(current - 1);
         }
      }
   }, { passive: true });

   showPage(0);
})();
