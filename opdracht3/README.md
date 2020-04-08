# link naar de website

https://joeyqman.github.io/frontend-voor-designers-1920/opdracht3/index.html


# frontend voor designers - opdracht 3: Een interactie uitwerken met externe data
De laatste opdracth voor FvD betrefte een website waar de data wordt geroepen van een externe link door middel van JSON. Hierbij is het van belang om de verschillende principes en UIevent toe te voegen en een goed ontwerp te hebben.

## Schetsen
De eerste les van opdracht 3 hebben we wederom geschetst. Ik had al vrij snel bedacht dat ik ronddraaiende blokken wilde. In eerste instantie wilde ik dit idee schrappen omdat het onrealistisch leek voor mij om dit te maken. Samen in overleg Met Sanne besloot ik toch om dit te proberen.

![schets 1](https://github.com/joeyqman/frontend-voor-designers-1920/blob/master/opdracht3/img/schets1.png)

Ik had tevens nagedacht aan een soort fotoslide show idee maar uiteindelijk leek mij dit toch niet zo'n leuk idee als de ronddraaiende blokken.

Met (veel) hulp van Sanne had ik het eerste opzetje. Hierbij wilde ik de fotos/covers op de voorkant van het blok en informatie op de andere vlakken van de kubus.

![versie 1](https://github.com/joeyqman/frontend-voor-designers-1920/blob/master/opdracht3/img/schets%201.png)

De knoppen van dit scherm waren nog in standaard formaat. Daarnaast waren dit nog de kleuren die Sanne aan de vlakken had gegeven. Om de gebruiker informatie te geven heb ik boven elk vlak een h2 toegevoegd. Deze titels vond ik erg chaotisch eruit zien omdat er erg weinig contrast zat tussen de voorste en de achterste titel. Uiteindelijk heb ik met hulp dit kunnen aanpassen. Uiteindelijk heb ik de links en rechts knoppen verandert naar zelfgemaakte buttons/img.

![versie 2](https://github.com/joeyqman/frontend-voor-designers-1920/blob/master/opdracht3/img/schets%201.png)

Op de foto zie je de eerste versie knoppen. Het leek me misschien iets te weinig en saai om alleen kubussen toe te voegen. Daarom besloot ik om twee soorten views en een dark/light mode toe te voegen. Deze twee "opties" waren gebaseerd op opdracht 1 (grid/lijst) en opdracht 2 (dark/light). Deze knoppen heb ik toegevoegd in een details en summary element van HTML die ik weer van opdracht 1 heb gehaald. Alle img/buttons heb ik met illustrater zelf gemaakt.

![schets 2](https://github.com/joeyqman/frontend-voor-designers-1920/blob/master/opdracht3/img/schets2.png)

De knoppen hadden in eerste instantie nog een background. Ik was bang dat er anders geen contrast zat maar naar een paar keer testen besloot ik toch om de background weg te halen. 

### Dark & Light mode
In opdracht 2 had ik al gebruik gemaakt van deze functie. Door de background te veranderen van kleur door middel van CSS en Javascript krijg je een dark en light mode. De code die ik eerst had geschreven bleek onnodig lang te zijn. Met hulp heb ik dit nu aangepast zodat ik in CSS de waardes kon veranderen. 

![versie 4.1 donker](https://github.com/joeyqman/frontend-voor-designers-1920/blob/master/opdracht3/img/details-donker.png)
![versie 4.2 licht](https://github.com/joeyqman/frontend-voor-designers-1920/blob/master/opdracht3/img/instellingen.png)

Bij zowel licht en donker heb ik gebruik gemaakt van een schaduw. Dit zorgt bij het witte scherm voor een schaduw effect en bij het donkere scherm integendeel weer voor een soort glow. Daarnaast heb ik ook bij de titels een kleine schaduw toegevoegd om te highlight welke sectie de gebruiker is.

### Grid & List mode
In opdracht 1 had ik gebruik gemaakt van verschillende views. Dit leek me ook gepast bij deze opdracht. Waar ik bij opdracht 1 een nieuwe html code had toegevoegd bleek dit ook makkelijk te kunnen met Javascript en CSS. Door op grid of list te klikken kan de gebruiker switchen tussen de blokken en een list view.

![versie 4.1 donker](https://github.com/joeyqman/frontend-voor-designers-1920/blob/master/opdracht3/img/listview-donker.png)
![versie 4.2 licht](https://github.com/joeyqman/frontend-voor-designers-1920/blob/master/opdracht3/img/Screenshot%202020-04-08%2015.44.29.png)

Beide views hebben nogsteeds de gradient die terug te vinden is bij de blokken. 

### mediaqueries
Om het geheel responsiver te maken heb ik mediaqueries toegevoegd. Deze zorgen ervoor dat de kolommen anders worden verdeeld wanneer het een bepaald schermgrootte bereikt. Zo heb ik bij zowel de grid als de list view, 2 mediaqueries. De grid gaat van 3 kolommen, naar 2 en uiteindelijk 1. De list gaat van 4 kolommen, naar 2 en uiteindelijk 1.

### knoppen
Het leek me leuk om als detail een active state toe te voegen aan de links/rechts knoppen. Dit kon enkel alleen efficient als ik de knoppen in CSS had gemaakt. Ik besloot om de images te verwijderen en zelf via css simpele, vergelijkbare knoppen te maken. Wanneer je op de knop klikt, komt er een grijze background.

## Principe 4 Keep users in control:
De gebruiker heeft zelf de keuze om te kiezen uit de verschillende views en het donker/licht scherm. Daarnaast kan de gebruiker beslissen of hij dit door middel van toetsen wil doen of door de knoppen.
## Principe 8 Provide a natural next step
De gebruiker kan door middel van de blokken op speelse wijze door de informatie maar krijgt ook de mogelijkheid om via de list view overzichtelijker naar  de content te kijken.
## Principe 9 Appearance follows behavior
De iconen in de knoppen tonen aan wat de knop betekent. Een donkere maan met sterren vertelt dat dit een donker-mode is en een zonnetje toont weer aan dat het licht is. Zo laten de iconen in de grid en list knop ook direct zien hoe de view eruit komt te zien wanneer je op de knop drukt.
## Principe 11 Strong visual hierarchies work best
Door te werken met de verschillende h1,h2 etc zorg je voor hierarchie. Daarnaast zorgt het verschil tussen de elementen door middel van iconen (sterren = reviews), cast list met bulletpoints en plot met background ervoor dat de gebruiker deze elemten kan onderscheiden.

## UIevents
Voor de UIevents heb ik gebruik gemaakt van keypress. De keypress zorgt ervoor dat de gebruiker door middel van toetsen kan switchen tussen de view en donker/licht.

![Uievents](https://github.com/joeyqman/frontend-voor-designers-1920/blob/master/opdracht3/img/instellingen.png)

## Conclusie/reflectie
Ik ben positief verrast dat het me nog enigzins gelukt is om te werken met JSON. Tijdens de eerste les had ik namelijk nogal veel vraagtekens omtrent dit onderwerp. Hierbij moet ik wel zeggen dat ik het nogsteeds lastig vond om door middel van css de elementen aan te sturen. Met hulp en veel denken is het op zich nog prima gelukt zoals ik voor ogen had.




