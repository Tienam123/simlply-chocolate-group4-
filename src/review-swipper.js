new Swiper('.slider', {
   direction: 'horizontal',
   slidesPerView: '1',
   // loop: true,
   spaceBetween: 16,
   grabCursor: true,
   simulateTouch: true,
   touchRatio: 2,
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
         spaceBetween: 28,
         slidesPerView: 2,
      },
      1200: {
         slidesPerView: 3,
      },
   },
});
