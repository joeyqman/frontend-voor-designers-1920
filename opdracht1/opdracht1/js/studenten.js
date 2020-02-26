var uitklapElement = document.querySelector(".plus");
//var inKlapElement = document.querySelector(".plus");
var volhartjeElement = document.querySelector(".hartleeg");

var lijstKnop = document.querySelector("#lijstk")
var vakKnop = document.querySelector("#vakk")

var lijstContent = document.querySelector(".lijstcontent")
var vakContent = document.querySelector(".vakcontent")

var roodVak = document.querySelector("#vakk")
var blancoVlak
var roodLijst
var blancoVlak

function doelijst() {
    vakContent.style.display = "none";
    lijstContent.style.display = "initial";

}

function doevak() {
    lijstContent.style.display = "none";
    vakContent.style.display = "initial";


}

lijstKnop.addEventListener('click', doelijst);
vakKnop.addEventListener('click', doevak);

function rodevak() {
    roodVak.src = 'img/roodvakjes.png';
}

roodVak.addEventListener('click', rodevak);






function uitklap() {
    uitklapElement.src = "img/min-icoon.png";
}

//function inKlap() {
//   uitklapElement.src = "img/plus-icoon.png";
//}

function volhartje() {
    volhartjeElement.src = "img/hartje-vol.png";
}

function poep() {
    leegContent.style.display = 'none';
}

//inKlapElement.addEventListener('click', inKlap);
uitklapElement.addEventListener('click', uitklap);
volhartjeElement.addEventListener('click', volhartje);
