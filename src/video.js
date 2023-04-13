const image = document.getElementById('howtomade-image');
const video = document.getElementById('howtomade-video-id');
const playButton = document.getElementById('howtomade-video-button-id');
let savedTime = 0; // зберігатиме час зупинки відео

playButton.addEventListener('click', function () {
   video.play();
   image.style.zIndex = 0;
   playButton.classList.add('hidden');
   video.style.zIndex = 1;
});

video.addEventListener('ended', function () {
   image.style.zIndex = 1;
   playButton.classList.remove('hidden');
   video.style.zIndex = 0;
});

// доданий обробник події для зупинки відео після кліку
video.addEventListener('click', function () {
   if (video.paused) {
      video.play();
   } else {
      savedTime = video.currentTime; // зберігає час зупинки
      video.pause();
   }
});

// доданий обробник події для продовження відтворення з місця зупинки
video.addEventListener('play', function () {
   if (savedTime) {
      video.currentTime = savedTime;
      savedTime = 0; // очищує збережений час
   }
});
// Додавання обробника події для зупинки відео при кліку на нього
video.addEventListener('click', function () {
   if (!video.paused) {
      video.pause();
      playButton.classList.add('hidden');
   }
});

// Додавання обробника події для продовження відтворення відео з місця зупинки
video.addEventListener('click', function () {
   if (video.paused && savedTime) {
      video.currentTime = savedTime;
      video.play();
      playButton.classList.remove('hidden');
   }
});
