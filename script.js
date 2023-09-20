
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
var partnersContainer = document.querySelector('.partners-container');
var socialMedia = document.querySelector('.social-media');
var footer = document.querySelector('footer');
socialMedia.addEventListener('click', function() {
    footer.scrollIntoView({ behavior: 'smooth' });
});
artists.addEventListener('click', function() {
    partnersContainer.scrollIntoView({ behavior: 'smooth' });
});