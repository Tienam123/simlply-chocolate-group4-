var swiper = new Swiper('.swiper-product', {
   slidesPerView: '1',
   // loop: true,
   spaceBetween: 18,
   grabCursor: true,
   simulateTouch: true,
   touchRatio: 2,
   // freeMode: true,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
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
