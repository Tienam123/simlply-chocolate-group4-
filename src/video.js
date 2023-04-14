var video = document.getElementById('howtomade-video-id');
var playButton = document.getElementById('howtomade-video-button-id');
var image = document.getElementById('howtomade-image');
let lastTime = 0;

playButton.addEventListener('click', function () {
   video.play();
      image.style.zIndex = 0;
      playButton.classList.add('hidden');
});

image.addEventListener('click', function () {
   if (!video.paused) {
      video.pause();
   } else {
      video.play();
   }
});

video.addEventListener('click', function () {
   if (video.paused) {
      video.play();
   } else {
      lastTime = video.currentTime;
      video.pause();
   }
});

video.addEventListener('timeupdate', function () {
   if (video.paused) {
      video.currentTime = lastTime;
   }
});