(function () {
   function init() {
      var flowers = document.querySelectorAll('.corner-flower');

      if (!flowers.length) return;

      var WIKI_URL = 'https://en.wikipedia.org/wiki/2B_(Nier:_Automata)';

      flowers.forEach(function (flower) {
         var clickCount = 0;

         flower.addEventListener('click', function () {
            flower.classList.remove('glowing');
            void flower.offsetWidth;
            flower.classList.add('glowing');

            clickCount++;
            if (clickCount >= 3) {
               clickCount = 0;
               window.open(WIKI_URL, '_blank', 'noopener');
            }
         });

         flower.addEventListener('animationend', function () {
            flower.classList.remove('glowing');
         });
      });
   }

   if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
   } else {
      init();
   }
})();
