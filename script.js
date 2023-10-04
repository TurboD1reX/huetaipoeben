
let scrollBtn = document.getElementById("scrollBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 220 || document.documentElement.scrollTop > 220) {
    scrollBtn.style.display = "block";
} else {
    scrollBtn.style.display = "none";
}
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 

}



var NewsLink = document.querySelector('.news-link');
var downButton = document.getElementById('buttonDownNews');
var NewsKsmLabel = document.querySelector('.ksm-label');
var IndexNewsContainer = document.querySelector('.news-container');

downButton.addEventListener('click', function() {
    NewsKsmLabel.scrollIntoView({ behavior: 'smooth' });
});

NewsLink.addEventListener('click', function() {
    IndexNewsContainer.scrollIntoView({ behavior: 'smooth' });
});

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






  