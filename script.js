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






var currentValue = parseInt(amountElement.textContent);
var Cena = document.querySelector(".cost-basket");
var amountElement = document.querySelector(".amount-basket"); 
var currentCena = parseFloat(Cena.textContent);  

function addAmount(cena) {
currentValue++;
amountElement.textContent = currentValue;
currentCena = currentCena+cena;
Cena.textContent = currentCena.toFixed(2);

}
function MinAmount(cena) {
if (currentValue > 1) {
currentValue --;
amountElement.textContent = currentValue;
currentCena = currentCena-cena;
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

  function removeProduct(title){
   var body = document.querySelector('body');
   const removeDiv1 = document.createElement("div");
   removeDiv1.className = "background-product-remove";
   removeDiv1.insertBefore(removeDiv1, body);
   removeDiv1.innerHTML = `<div class="col-sm-11 col-md-4">
                           <span id="delete-text">Czy napewno chcesz usunac ${title} z koszyka?</span>
                           <div style="display:flex;justify-content;align-items;">
                           <button id="buttonTemp buttonRemove"style="background-color:red; color:white;">Usunac</button>
                           <button id="buttonTemp">Powrot</button>
                           </div>
  </div>`;
  }
 function addProduct(img,title,cost){

  var basket = document.querySelector('.product-shop-basket');
  basket.innerHTML += `<div class="product-card-basket col-sm-12 col-md-6">
    <div class="img-basket"><img src="photos/test/${img}"alt=""></div>
    <div class="delete-button-basket" onclick="removeProduct(${title})"><i class="fa fa-trash-o" style="font-size:36px"></i></div>
    <div class="title-basket-product">${title}</div>
    
    <div style="display:flex;justify-content:center;align-items:center;width:fit-content;height:35px;">
    <div class="cost-basket">${cost}</div>
<button class="addDec-basket">+</button>
<span class="amount-basket">1</span>
<button class="addDec-basket">−</button>
                </div>`
 }


  