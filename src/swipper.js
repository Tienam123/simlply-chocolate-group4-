new Swiper('.swiper-product', {
   slidesPerView: 1,
   loop: true,
   speed: 600,
   spaceBetween: 18,
   grabCursor: true,
   simulateTouch: true,
   touchRatio: 2,
   // mousewheel: {
   //    sensitivity: 1,
   // },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
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
