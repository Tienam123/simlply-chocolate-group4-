new Swiper('.swiper-product', {
   slidesPerView: 'auto',
   speed: 600,
   spaceBetween: 18,
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
});
