(function () {
   var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

   if (reduceMotion || !('IntersectionObserver' in window)) return;

   var targets = document.querySelectorAll(
      '.link, .section-header, .subsection-label, .pub-card, .footer'
   );

   if (!targets.length) return;

   var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
         if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            observer.unobserve(entry.target);
         }
      });
   }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
   });

   targets.forEach(function (el) {
      el.classList.add('reveal-init');
      observer.observe(el);
   });
})();
