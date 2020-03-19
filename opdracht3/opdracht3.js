let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
var myCovers = []
var myTitles = []
var myPlots = []
var myDates = []
var myActors = []


coverChild = document.querySelectorAll('article section:first-child');
titleChild = document.querySelectorAll('article section:first-child');
plotChild = document.querySelectorAll('article section:nth-child(2)');
dateChild = document.querySelectorAll('article section:nth-child(2)');
reviewChild = document.querySelectorAll('article section:nth-child(3)');


let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    const movies = request.response;
    for (let i = 0; i < movies.length; i++) {
        //console.log(movies[i]);
        var myCover = document.createElement('img');
        myCover.src = movies[i].cover;
        myCovers.push(myCover)
        var myTitle = document.createElement('h2');
        myTitle.innerHTML = movies[i].title;
        myTitles.push(myTitle)
        var myPlot = document.createElement('p');
        myPlot.innerHTML = movies[i].plot.slice(0, 350);
        myPlots.push(myPlot)
        var myDate = document.createElement('date');
        myDate.innerHTML = movies[i].release_date;
        myDates.push(myDate)
        var myActor = document.createElement('h1');
        var innerActor = []
        for (let x = 0; x < 4; x++) {
            innerActor.push(' ' + movies[i].actors[x].actor_name + ' ')
        }
        myActor.innerHTML = innerActor
        myActors.push(myActor)
        movies[i].review;


    }

    for (let i = 0; i < coverChild.length; i++) {
        coverChild[i].appendChild(myCovers[i])
        titleChild[i].appendChild(myTitles[i])
        plotChild[i].appendChild(myPlots[i])
        dateChild[i].appendChild(myDates[i])
        reviewChild[i].appendChild(myActors[i])

    }

}
/***************/
/* ronddraaiende blokken */
/***************/

const naarLinks = -90;
const naarRechts = 90;

/***************/
/* het draaien */
/***************/
function draaien(deButton, richting) {
    var hetArticle = deButton.parentNode,
        huidigeArticleHoek,
        nieuweArticleHoek;

    huidigeArticleHoek = getComputedStyle(hetArticle).getPropertyValue("--articleHoek");
    huidigeArticleHoek = parseInt(huidigeArticleHoek);

    nieuweArticleHoek = huidigeArticleHoek + richting;
    hetArticle.style.setProperty("--articleHoek", nieuweArticleHoek);
}

/***********/
/* buttons */
/***********/
var buttonVierZijdenLinks = document.querySelector(".vierZijden button:first-of-type");
buttonVierZijdenLinks.addEventListener("click", function () {
    draaien(this, naarLinks);
});
var buttonVierZijdenRechts = document.querySelector(".vierZijden button:last-of-type");
buttonVierZijdenRechts.addEventListener("click", function () {
    draaien(this, naarRechts);
});

var buttonVierZijdenMetDakLinks = document.querySelector(".vierZijdenMetDak button:first-of-type");
buttonVierZijdenMetDakLinks.addEventListener("click", function () {
    draaien(this, naarLinks);
});
var buttonVierZijdenMetDakRechts = document.querySelector(".vierZijdenMetDak button:last-of-type");
buttonVierZijdenMetDakRechts.addEventListener("click", function () {
    draaien(this, naarRechts);
});

var buttonVierZijdenLinks1 = document.querySelector(".vierZijden1 button:first-of-type");
buttonVierZijdenLinks1.addEventListener("click", function () {
    draaien(this, naarLinks);
});
var buttonVierZijdenRechts1 = document.querySelector(".vierZijden1 button:last-of-type");
buttonVierZijdenRechts1.addEventListener("click", function () {
    draaien(this, naarRechts);
});
