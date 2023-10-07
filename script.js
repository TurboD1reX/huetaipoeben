
const buttonDownNews = document.getElementById('buttonDownNews');
const aktualne = document.querySelector('.aktualne')

buttonDownNews.onclick =  function() {
  aktualne.scrollIntoView({ behavior: 'smooth' });
};

let scrollBtn = document.getElementById("scrollBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 220 || document.documentElement.scrollTop > 220) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}


function incMessage() {
  const messageAlert = document.querySelector('.message-alert');
  messageAlert.style.width = "350px";
  messageAlert.querySelector('.message-text').style.display = "flex";
}

function decMessage() {
  const messageAlert = document.querySelector('.message-alert');
  messageAlert.style.width = "0px";
  messageAlert.querySelector('.message-text').style.display = "none";
}



function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
  
}
function socialMedia() {
let mediaContainer = document.querySelector('.social-media-container');
let titleNews = document.querySelector('.title');
    mediaContainer.style.display = "flex";
    titleNews.style.display = "none";
  }
  function delivery() {
    const deliveryAddress = document.querySelector(".delivery-address");
    const checkbox = document.getElementById("checkbox");

    if (checkbox.checked) {
      deliveryAddress.style.display = "block";
    } else {
      deliveryAddress.style.display = "none";
    }
  }


const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

function updateSlider() {
    const translateX = -currentIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

// Change slide every 3 seconds (3000 milliseconds)
setInterval(nextSlide, 3000);

// Initial slide
updateSlider();






  