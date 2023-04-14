// const image = document.getElementById('howtomade-image');
// const video = document.getElementById('howtomade-video-id');
// const playButton = document.getElementById('howtomade-video-button-id');
// let savedTime = 0;

// playButton.addEventListener('click', function () {
//    video.play();
//    image.style.zIndex = 0;
//    playButton.classList.add('hidden');
//    video.style.zIndex = 1;
// });

// video.addEventListener('ended', function () {
//    image.style.zIndex = 1;
//    playButton.classList.remove('hidden');
//    video.style.zIndex = 0;
// });

// video.addEventListener('click', function () {
//    if (video.paused) {
//       video.play();
//    } else {
//       savedTime = video.currentTime;
//       video.pause();
//    }
// });

// video.addEventListener('play', function () {
//    if (video.currentTime === 0 && savedTime) {
//       video.currentTime = savedTime;
//       savedTime = 0;
//    }
// });

// video.addEventListener('click', function () {
//    if (video.paused && video.currentTime !== video.duration) {
//       savedTime = video.currentTime;
//       video.play();
//       playButton.classList.remove('hidden');
//    } else if (!video.paused) {
//       video.pause();
//       playButton.classList.add('hidden');
//    }
// });
// Отримання посилань на елементи HTML
// const videoButton = document.getElementById("howtomade-video-button-id");
// const video = document.getElementById("howtomade-video-id");
// const image = document.getElementById("howtomade-image");

// // Функція для запуску відео
// function playVideo() {
//    video.play();
//    image.style.zIndex = 0;
//    videoButton.classList.add('hidden');
//    video.style.zIndex = 1;
// }

// // Функція для зупинки відео
// function pauseVideo() {
//   video.pause();
// }

// // Додавання обробників подій на кнопку та відео
// videoButton.addEventListener("click", playVideo);
// video.addEventListener("click", function () {
//   if (video.paused) {
//     video.play();
//   } else {
//     video.pause();
//   }
// });

// image.addEventListener("click", playVideo); // я

// ЦЕ САМИЙ РОБОЧИЙ

// var video = document.getElementById('howtomade-video-id');
// var playButton = document.getElementById('howtomade-video-button-id');
// var image = document.getElementById('howtomade-image');
// let lastTime = 0;

// playButton.addEventListener('click', function () {
//    video.play();
//    image.style.zIndex = 0;
//    playButton.classList.add('hidden');
// });

// image.addEventListener('click', function () {
//    if (!video.paused) {
//       video.pause();
//    } else {
//       video.play();
//    }
// });

// video.addEventListener('click', function () {
//    if (video.paused) {
//       video.play();
//    } else {
//       lastTime = video.currentTime;
//       video.pause();
//    }
// });

// video.addEventListener('timeupdate', function () {
//    if (video.paused) {
//       video.currentTime = lastTime;
//    }
// });

// це гарний код еле не праує з атрибутом  controls у тезі Video
// // Отримуємо посилання на елементи нашої сторінки
// const video = document.getElementById('howtomade-video-id');
// const playButton = document.getElementById('howtomade-video-button-id');
// const image = document.getElementById('howtomade-image');

// // Функція для зміни zIndex
// function setZIndex(element, index) {
//    element.style.zIndex = index;
// }

// // Функція, яка перевірятиме, чи працює відео
// function checkVideoStatus() {
//    if (video.paused) {
//       // Відео на паузі, показуємо кнопку play
//       playButton.style.display = 'block';
//    } else {
//       // Відео програвається, ховаємо кнопку play
//       playButton.style.display = 'none';
//    }
// }

// // Прив'язуємо події на клік до елементів
// playButton.addEventListener('click', function () {
//    video.play();
// });

// image.addEventListener('click', function () {
//    video.play();
// });

// video.addEventListener('click', function () {
//    if (video.paused) {
//       video.play();
//    } else {
//       video.pause();
//    }
// });

// // При початку відтворення відео
// video.addEventListener('play', function () {
//    setZIndex(playButton, 0);
//    setZIndex(image, 0);
// });

// // При паузі відтворення відео
// video.addEventListener('pause', function () {
//    checkVideoStatus();
//    setZIndex(playButton, 11);
// });
// // При зупинці відео (при закінченні відтворення або при натисканні кнопки стоп)
// video.addEventListener('ended', function () {
//    // Показуємо кнопку play
//    playButton.style.display = 'block';
//    // Встановлюємо Z-Index для кнопки play та фото на вихідне значення
//    setZIndex(playButton, 11);
//    setZIndex(image, 11);
// });
// // Перевірка статусу відео при завантаженні сторінки
// checkVideoStatus();

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