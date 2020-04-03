let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

//var myCovers = []
//var myTitles = []
//var myPlots = []
//var myDates = []
//var myActors = []


let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    const movies = request.response;

    var coverChild = document.querySelectorAll('article section:first-child');
    var titleChild = document.querySelectorAll('article section:first-child');
    var plotChild = document.querySelectorAll('article section:nth-child(2)');
    var dateChild = document.querySelectorAll('article section:nth-child(2)');
    var actorsChild = document.querySelectorAll('article section:nth-child(3)');
    var reviewChild = document.querySelectorAll('article section:nth-child(4)');



    for (let i = 0; i < movies.length; i++) {
        //console.log(movies[i]);
        var myCover = document.createElement('img');
        myCover.src = movies[i].cover;
        //        myCovers.push(myCover)
        coverChild[i].appendChild(myCover);

        var myTitle = document.createElement('h2');
        myTitle.innerHTML = movies[i].title;
        titleChild[i].appendChild(myTitle);
        //        myTitles.push(myTitle);


        var myPlot = document.createElement('p');
        myPlot.innerHTML = movies[i].plot.slice(0, 350);
        plotChild[i].appendChild(myPlot);
        //        myPlots.push(myPlot);

        var myDate = document.createElement('date');
        myDate.innerHTML = movies[i].release_date;
        dateChild[i].appendChild(myDate);
        //        myDates.push(myDate);


        var myActors = document.createElement('ul');
        for (let x = 0; x < movies[i].actors.length; x++) {
            let myActor = document.createElement('li');
            myActor.innerHTML = movies[i].actors[x].actor_name;
            //			innerActor.push(' ' + movies[i].actors[x].actor_name + ' ');
            myActors.appendChild(myActor);
        }
        actorsChild[i].appendChild(myActors);
        //		myActor.innerHTML = innerActor;
        //        myActors.push(myActor);


        var myReviews = document.createElement('ul');
        for (let x = 0; x < movies[i].reviews.length; x++) {
            let myReview = document.createElement('li');
            myReview.innerHTML = movies[i].reviews[x].score;
            myReviews.appendChild(myReview);
        }
        reviewChild[i].appendChild(myReviews);
    }

    //    for (let i = 0; i < coverChild.length; i++) {
    //        coverChild[i].appendChild(myCovers[i]);
    //        titleChild[i].appendChild(myTitles[i]);
    //        plotChild[i].appendChild(myPlots[i]);
    //        dateChild[i].appendChild(myDates[i]);
    //        reviewChild[i].appendChild(myActors[i]);
    //
    //    }

}

/*************************/
/* ronddraaiende blokken */
/*************************/

const naarLinks = -90;
const naarRechts = 90;

/***************/
/* het draaien */
/***************/
function draaien(hetArticle, richting) {
    var huidigeArticleHoek,
        nieuweArticleHoek;

    huidigeArticleHoek = getComputedStyle(hetArticle).getPropertyValue("--articleHoek");
    huidigeArticleHoek = parseInt(huidigeArticleHoek);

    nieuweArticleHoek = huidigeArticleHoek + richting;
    hetArticle.style.setProperty("--articleHoek", nieuweArticleHoek);

    var articleSections = hetArticle.querySelectorAll("section:not(:last-of-type)");
    if (richting == naarLinks) {
        for (let i = 0; i < articleSections.length; i++) {
            let huidigePositie = parseInt(articleSections[i].getAttribute("data-positie"));
            let nieuwePositie;
            if (huidigePositie != 1) {
                nieuwePositie = huidigePositie - 1;
            } else {
                nieuwePositie = 4;
            }
            articleSections[i].setAttribute("data-positie", nieuwePositie);
        }
    } else {
        for (let i = 0; i < articleSections.length; i++) {
            let huidigePositie = parseInt(articleSections[i].getAttribute("data-positie"));
            let nieuwePositie;
            if (huidigePositie != 4) {
                nieuwePositie = huidigePositie + 1;
            } else {
                nieuwePositie = 1;
            }
            articleSections[i].setAttribute("data-positie", nieuwePositie);
        }
    }

}


/***********/
/* buttons */
/***********/
//var buttonVierZijdenLinks = document.querySelector(".vierZijden button:first-of-type");
//buttonVierZijdenLinks.addEventListener("click", function () {
//	draaien(this, naarLinks);
//});
//var buttonVierZijdenRechts = document.querySelector(".vierZijden button:last-of-type");
//buttonVierZijdenRechts.addEventListener("click", function () {
//	draaien(this, naarRechts);
//});
//
//var buttonVierZijdenMetDakLinks = document.querySelector(".vierZijden1 button:first-of-type");
//buttonVierZijdenMetDakLinks.addEventListener("click", function () {
//	draaien(this, naarLinks);
//});
//var buttonVierZijdenMetDakRechts = document.querySelector(".vierZijden1 button:last-of-type");
//buttonVierZijdenMetDakRechts.addEventListener("click", function () {
//	draaien(this, naarRechts);
//});
//
//var buttonVierZijdenLinks1 = document.querySelector(".vierZijden2 button:first-of-type");
//buttonVierZijdenLinks1.addEventListener("click", function () {
//	draaien(this, naarLinks);
//});
//var buttonVierZijdenRechts1 = document.querySelector(".vierZijden2 button:last-of-type");
//buttonVierZijdenRechts1.addEventListener("click", function () {
//	draaien(this, naarRechts);
//});

var deBlokken = document.querySelectorAll('article');

for (let z = 0; z < deBlokken.length; z++) {
    let buttonLinks = deBlokken[z].querySelector("button:first-of-type");
    let buttonRechts = deBlokken[z].querySelector("button:last-of-type");
    buttonLinks.addEventListener("click", function () {
        draaien(this.parentNode, naarLinks);
    });
    buttonRechts.addEventListener("click", function () {
        draaien(this.parentNode, naarRechts);
    });
}

// blokken of lijst view - opracht 1

/*var lijstKnop = document.querySelector("#lijstk");
var blokKnop = document.querySelector("#vakk");

var lijstContent = document.querySelector(".lijstContent");
var blokContent = document.querySelector(".blokContent");


function doelijst() {
    blokContent.style.display = "none";
    lijstContent.style.display = "initial";
}

function doeblokken() {
    blokContent.style.display = "grid";
    lijstContent.style.display = "none";
}


lijstKnop.addEventListener('click', doelijst);
blokKnop.addEventListener('click', doeblokken); */




// day night - opdracht 3

var donkerKnop = document.querySelector('.night');
var lichtKnop = document.querySelector('.day');
var bodyElement = document.querySelector('body');
//var kopjesElement = document.querySelector('section > h2');
var titelElement = document.querySelector('h1');
var detailsElement = document.querySelector('details');
var summaryElement = document.querySelector('summary');


function donker(event) {
    bodyElement.style.backgroundColor = "rgb(13, 13, 23)";
    summaryElement.style.backgroundColor = "rgb(41, 47, 57)";
    detailsElement.style.backgroundColor = "rgb(39, 44, 54)";
    titelElement.style.color = 'white';
}

function licht(event) {
    bodyElement.style.backgroundColor = "rgb(239, 239, 239)";
    summaryElement.style.backgroundColor = "rgb(193, 193, 193)";
    detailsElement.style.backgroundColor = "rgb(193, 193, 193)";
    titelElement.style.color = 'rgb(13, 13, 23)';
    //kopjesElement.style.color = 'rgb(13, 13, 23)';


}

donkerKnop.addEventListener("click", donker);
lichtKnop.addEventListener("click", licht);
