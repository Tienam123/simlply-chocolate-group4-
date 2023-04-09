  document.getElementById('button-id').addEventListener('click', function () {
  document.getElementById('my-image').style.zIndex = 1;
  document.getElementById('iframe-id').style.zIndex = 11;
  document.getElementById('iframe-id').src ='https://www.youtube.com/embed/41UbWmXKWkc?autoplay=1';
  document.getElementById('button-id').classList.add('hidden');
  });