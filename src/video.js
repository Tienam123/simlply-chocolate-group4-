const video = document.getElementById('howtomade-video-id');
const playButton = document.getElementById('howtomade-video-button-id');
const image = document.getElementById('howtomade-image');

// Функція для зміни zIndex
function setZIndex(element, index) {
   element.style.zIndex = index;
}
// відео починає відтворення при кліку по кнопці
playButton.addEventListener('click', function () {
   video.play();
});
// відео починає відтворення при кліку по фото 
image.addEventListener('click', function () {
   if (video.paused) {
      video.play();
   } else {
      video.pause();
   }   
});
// При початку відтворення відео
video.addEventListener('play', function () {
   setZIndex(playButton, 0);
   setZIndex(image, 11);
   image.style.opacity = 0;
   image.style.height = '88%';
});
// При паузі (зупинці) відео
video.addEventListener('pause', function () {
   setZIndex(playButton, 11);
   setZIndex(image, 11);
   image.style.opacity = 0;
   image.style.height = '88%';
});
// При кліку на відео
video.addEventListener('click', function () {
   if (!video.paused) {
      video.pause();
   }
});
// При зупинці відео (при закінченні відтворення або при натисканні кнопки стоп)
video.addEventListener('ended', function () {
   // Встановлюємо Z-Index для кнопки play та фото на вихідне значення
   setZIndex(playButton, 11);
   setZIndex(image, 11);
   image.style.opacity = 1;
   image.style.height = '100%';
});
