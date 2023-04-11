var player;

function onYouTubeIframeAPIReady() {
   player = new YT.Player('iframe-id', {
      height: '400',
      width: '600',
      videoId: '41UbWmXKWkc',
   });
}

document.getElementById('button-id').addEventListener('click', function () {
   document.getElementById('my-image').style.zIndex = 1;
   document.getElementById('iframe-id').style.zIndex = 11;
   player.playVideo();
   document.getElementById('button-id').classList.add('hidden');
});
