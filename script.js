
var buttonDownNews = document.getElementById('buttonDownNews');
const aktualne = document.querySelector('.aktualne')

buttonDownNews =  function() {
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

 messageAlert.style.transform = "translateX(0%)";
}

function decMessage() {
  const messageAlert = document.querySelector('.message-alert');
  messageAlert.style.transform = "translateX(-100%)";
}








function decShopBar(){
  const shopBar = document.querySelector('.shop-basket');
  shopBar.style.transform = "translateX(100%)";
}
function incShopBar(){
  const shopBar = document.querySelector('.shop-basket');
  shopBar.style.transform = "translateX(0%)";
}






var amountElement = document.querySelector(".amount"); 
var currentValue = parseInt(amountElement.textContent);
var Cena = document.querySelector(".product-price");
var currentCena = parseFloat(Cena.textContent);  

function addAmount() {
currentValue++;
amountElement.textContent = currentValue;
currentCena = currentCena+19.99;
Cena.textContent = currentCena.toFixed(2);

}
function MinAmount() {
if (currentValue > 1) {
currentValue --;
amountElement.textContent = currentValue;
currentCena = currentCena-19.99;
Cena.textContent = currentCena.toFixed(2);
}
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




  