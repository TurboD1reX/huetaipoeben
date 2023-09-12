function zmiana() {
    document.querySelector("nav").style.boxShadow="none"
    document.querySelector("body").style.backgroundColor = "#444444";
    document.querySelector("nav").style.backgroundColor = "#121212";
    document.querySelector("section").style.textShadow = "3px 0px 10px black";
    document.querySelector("article").style.textShadow = "3px 0px 10px black";
    document.querySelector("article").style.color = "#e2e2e2"; 
    document.querySelector("footer").style.backgroundColor = "#121212";
    document.querySelector("footer").style.boxShadow = "none";
    document.querySelector("section").style.color = "#e2e2e2";
    document.getElementById("text_preorder_2").style.color = "#e2e2e2";
    document.getElementById("text_preorder_1").style.color = "#e2e2e2";
    document.getElementById("text_preorder_2").style.textShadow = "3px 0px 10px black";
    document.getElementById("text_preorder_1").style.textShadow = "8px 5px 10px black";
    document.getElementById("preorder_photo").style.boxShadow= "none"; 
    document.getElementById("theme_changer").style.display= "none"; 
    document.getElementById("theme_changer_2").style.display= "block"; 
    document.getElementById("o_nas_tytul").style.borderColor = "#e2e2e2";
    document.getElementById("o_nas_tytul").style.color = "#e2e2e2";
    document.getElementById("o_nas_tytul").style.textShadow = "3px 0px 10px black";


    document.getElementById("photo_main").style.boxShadow = "none"; 
}

function zmiana_return() {
    document.querySelector("nav").style.boxShadow="2px 2px 15px 10px rgba(0, 0, 0, 0.8)"
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("nav").style.backgroundColor = "black";
    document.querySelector("footer").style.boxShadow = "2px 2px 15px 10px rgba(0, 0, 0, 0.8)";
    document.querySelector("article").style.color = "black";
    document.querySelector("footer").style.boxShadow = "2px 2px 15px 10px rgba(0, 0, 0, 0.8)"; 
    document.querySelector("footer").style.backgroundColor = "black";
    document.querySelector("section").style.color = "#2e2e2e";
    document.querySelector("section").style.textShadow = "none"; 
    document.querySelector("article").style.textShadow = "none";
    document.getElementById("o_nas_tytul").style.borderColor = "black";
    document.getElementById("o_nas_tytul").style.color = "black";
    document.getElementById("preorder_photo").style.boxShadow= "0px 0px 10px 2px "; 
    document.getElementById("text_preorder_2").style.color = "#575757";
    document.getElementById("text_preorder_1").style.color = "#000000";
    document.getElementById("text_preorder_2").style.textShadow = "none";
    document.getElementById("text_preorder_1").style.textShadow = "none";
    document.getElementById("o_nas_tytul").style.textShadow = "none";
    document.getElementById("theme_changer").style.display= "block"; 
    document.getElementById("theme_changer_2").style.display= "none";


    document.getElementById("photo_main").style.boxShadow = "1px 2px 40px 5px rgba(209, 0, 0, 0.8)"; 
}