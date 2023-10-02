
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



var artists = document.querySelector('.artists');
var downButton = document.getElementById('buttonDownNews')
var  NewsKsmLabel= document.querySelector('.ksm-label');
var socialMedia = document.querySelector('.social-media');
var footer = document.querySelector('footer');
var IndexNewsContainer = document.querySelector('.news-container');
socialMedia.addEventListener('click', function() {
    footer.scrollIntoView({ behavior: 'smooth' });
});
downButton.addEventListener('click', function() {
    NewsKsmLabel.scrollIntoView({ behavior: 'smooth' });
})
artists.addEventListener('click', function() {
    IndexNewsContainer.scrollIntoView({ behavior: 'smooth' });
})