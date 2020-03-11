var donkerKnop = document.querySelector('.dark');
var lichtKnop = document.querySelector('.licht');
var achtergrond = document.querySelector('#rechterkolom');
var bodyElement = document.querySelector('body');
var darkWhite = document.querySelector('#darkIcon');
var tekstElement = document.querySelector("p")

var darkfotos = document.querySelector('.darkmodefotos');
var lichtfotos = document.querySelector('.lichtmodefotos');

var switchKnop = document.querySelector(".switch")




function donker(event) {
    document.getElementById("rechterkolom").style.backgroundColor = "black";
    document.getElementById("linkerkolom").style.backgroundColor = "dimgray";
    donkerKnop.style.backgroundColor = "grey";
    lichtKnop.style.backgroundColor = "black";
    darkWhite.src = "img/darkIcon-white.png";
    lichtfotos.style.display = "none";
    darkfotos.style.display = "initial";

}

function licht(event) {
    document.body.style.backgroundColor = "white";
    document.getElementById("rechterkolom").style.backgroundColor = "white";
    document.getElementById("linkerkolom").style.backgroundColor = "lightgrey";
    lichtKnop.style.backgroundColor = "grey";
    donkerKnop.style.backgroundColor = "white";
    darkWhite.src = "img/darkIcon.png";
    lichtfotos.style.display = "initial";
    darkfotos.style.display = "none";

}

function doeKeypress(event) {
    var key = event.key;
    if (key === 'd' || key === 'D') {
        donker(event);
    } else if (key === 'l' || key === 'L') {
        licht(event);
    }
}



donkerKnop.addEventListener("click", donker);
lichtKnop.addEventListener("click", licht);
bodyElement.addEventListener('keypress', doeKeypress);
