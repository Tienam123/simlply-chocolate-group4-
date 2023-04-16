const video = document.getElementById('howtomade-video-id');
const playButton = document.getElementById('howtomade-video-button-id');
const image = document.getElementById('howtomade-image');

// Функція для зміни zIndex
function setZIndex(element, index) {
   element.style.zIndex = index;
}

// Функція, яка перевірятиме, чи працює відео
function checkVideoStatus() {
   if (video.paused) {
      // Відео на паузі, показуємо кнопку play
      playButton.style.zIndex = 11;
   } else {
      // Відео програвається, ховаємо кнопку play
      playButton.style.zIndex = 0;
   }
}

// Прив'язуємо події на клік до елементів
playButton.addEventListener('click', function () {
   video.play();
});

image.addEventListener('click', function () {
   video.play();
});
video.addEventListener('click', function () {
   video.play();
});

// При початку відтворення відео
video.addEventListener('play', function () {
   setZIndex(playButton, 0);
   setZIndex(image, 0);
});

// При паузі відтворення відео
video.addEventListener('pause', function () {
   checkVideoStatus();
   setZIndex(playButton, 11);
});

// При кліку на відео
video.addEventListener('click', function () {
   if (video.paused) {
      video.play();
   } else {
      video.pause();
   }
});

// При зупинці відео (при закінченні відтворення або при натисканні кнопки стоп)
video.addEventListener('ended', function () {
   // Показуємо кнопку play
   playButton.style.display = 'block';
   // Встановлюємо Z-Index для кнопки play та фото на вихідне значення
   setZIndex(playButton, 11);
   setZIndex(image, 11);
});

// При завантаженні сторінки
checkVideoStatus();