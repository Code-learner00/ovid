const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slide');
const carousel = document.querySelector('.carousel');
const noMoreInfo = document.querySelector('.no-more-info');

let currentSlide = 1;

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index + 1;
        updateSlide();
    });
});

function updateSlide() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slides[currentSlide - 1].classList.add('active');

    dots.forEach((dot) => {
        dot.classList.remove('active');
    });

    dots[currentSlide - 1].classList.add('active');
}

carousel.addEventListener('transitionend', () => {
    if (currentSlide === 1) {
        noMoreInfo.style.display= 'none';
    } else {
        noMoreInfo.style.display = 'block';
    }
});

updateSlide();

const passwordEye = document.querySelector('.password-eye');
const passwordInput = document.querySelector('#password');

passwordEye.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});

const statusIndicator = document.querySelector('.status-indicator');
const statusDots = statusIndicator.querySelectorAll('.dot');
const statusText = statusIndicator.querySelector('.status-text');

// Simulate server and database checks
function checkServerStatus() {
  return new Promise((resolve, reject) => {
    // Replace with your server and database checks
    setTimeout(() => {
      resolve(Math.random() > 0.5); // 50% chance of success
    }, 2000);
  });
}

async function updateStatus() {
  statusDots.forEach((dot) => dot.classList.add('loading'));
  statusText.textContent = '';

  try {
    const serverStatus = await checkServerStatus();
    if (serverStatus) {
      
      statusText.classList.add('good');
    } else {
      
      statusText.classList.add('bad');
    }
  } catch (error) {
    
    statusText.classList.add('bad');
  } finally {
    statusDots.forEach((dot) => dot.classList.remove('loading'));
  }
}

updateStatus();


$(window).load(function() {
  var theWindow = $(window),
      $bg = $("#bg"),
      aspectRatio = $bg.width() / $bg.height();

  function resizeBg() {
    if ((theWindow.width() / theWindow.height()) < aspectRatio) {
      $bg
       .removeClass()
       .addClass('bgheight');
    } else {
      $bg
       .removeClass()
       .addClass('bgwidth');
    }
  }

  theWindow.resize(resizeBg).trigger("resize");
});