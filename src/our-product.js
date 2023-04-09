const swiper = new Swiper('.swiper-product', {
   direction: 'horizontal',
   slidesPerView: '1',
   spaceBetween: 18,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   simulateTouch: true,
   touchRatio: 2,
   slideToClickedSlide: true,
   freeMode: true,
   a11y: {
      enabled: true,
   },

   breakpoints: {
      768: {
         slidesPerView: 2.5,
      },

      1200: {
         slidesPerView: 4,
      },
   },
});
