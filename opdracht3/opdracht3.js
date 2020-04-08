let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
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
    var directorsChild = document.querySelectorAll('article section:nth-child(3)');
    var reviewChild = document.querySelectorAll('article section:nth-child(4)');



    for (let i = 0; i < movies.length; i++) {
        console.log(movies[i]);
        var myTitle = document.createElement('h2');
        myTitle.innerHTML = movies[i].title;
        titleChild[i].appendChild(myTitle);
        //        myTitles.push(myTitle);

        var myCover = document.createElement('img');
        myCover.src = movies[i].cover;
        //        myCovers.push(myCover)
        coverChild[i].appendChild(myCover);

        var myPlot = document.createElement('p');
        myPlot.innerHTML = movies[i].plot.slice(0, 350);
        plotChild[i].appendChild(myPlot);
        //        myPlots.push(myPlot);

        // var myDate = document.createElement('date');
        //myDate.innerHTML = movies[i].release_date;
        //dateChild[i].appendChild(myDate);
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

        /*var myDirectors = document.createElement('ul');
        for (let x = 0; x < movies[i].directors.length; x++) {
            let myDirector = document.createElement('li');
            myDirector.innerHTML = movies[i].directors[x].name;
            //			innerActor.push(' ' + movies[i].actors[x].actor_name + ' ');
            myDirectors.appendChild(myDirector);
        }
        directorsChild[i].appendChild(myDirectors);
        //		myActor.innerHTML = innerActor;
        //        myActors.push(myActor);*/

        var myReviews = document.createElement('ul');
        for (let x = 0; x < movies[i].reviews.length; x++) {
            let myReview = document.createElement('li');
            myReview.innerHTML = movies[i].reviews[x].score;
            myReviews.appendChild(myReview);
        }
        reviewChild[i].appendChild(myReviews);
    }
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


// day night - opdracht 3
/* dit snap je denk ik wel */
/* met de buttons wordt de waarde van het attribute data-theme van de body op donker of licht gezet */
var donkerKnop = document.querySelector('#night');
var lichtKnop = document.querySelector('#day');

function donker() {
    document.body.setAttribute("data-theme", "donker");
}

function licht() {
    document.body.setAttribute("data-theme", "licht");
}

donkerKnop.addEventListener("click", donker);
lichtKnop.addEventListener("click", licht);


// grid list
/* dit snap je denk ik wel */
/* met de buttons wordt de waarde van het attribute data-view van de body op grid of list gezet */
var gridKnop = document.querySelector('#grid');
var listKnop = document.querySelector('#list');

function grid() {
    document.body.setAttribute("data-view", "grid");
}

function list() {
    document.body.setAttribute("data-view", "list");
}

gridKnop.addEventListener("click", grid);
listKnop.addEventListener("click", list);
