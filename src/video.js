const image = document.getElementById('howtomade-image');
const video = document.getElementById('howtomade-video-id');
const playButton = document.getElementById('howtomade-video-button-id');
let savedTime = 0;

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

video.addEventListener('click', function () {
   if (video.paused) {
      video.play();
   } else {
      savedTime = video.currentTime;
      video.pause();
   }
});

video.addEventListener('play', function () {
   if (video.currentTime === 0 && savedTime) {
      video.currentTime = savedTime;
      savedTime = 0;
   }
});

video.addEventListener('click', function () {
   if (video.paused && video.currentTime !== video.duration) {
      savedTime = video.currentTime;
      video.play();
      playButton.classList.remove('hidden');
   } else if (!video.paused) {
      video.pause();
      playButton.classList.add('hidden');
   }
});
