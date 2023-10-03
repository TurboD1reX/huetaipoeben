
let scrollBtn = document.getElementById("scrollBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 220 || document.documentElement.scrollTop > 220) {
    scrollBtn.style.display = "block";
} else {
    scrollBtn.style.bottom = "-60px";
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

function socialMedia(){
var titleNews = document.querySelector('.title');
var MediaContainer = document.querySelector('.social-media-container');
var PreorderContainer = document.getElementById('container_preorder');
titleNews.style.display =  "none";
MediaContainer.style.display = "flex";
PreorderContainer.style.display = "none";
}