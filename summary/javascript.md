Title:  Javascript  
Author: Max Köhler  
web: http://www.twitter.com/awesomephant
email: max@koehler-kn.de  
Date:   July 1, 2013
css:	style.css  

#Javascript
<p class='author'><span>Max Köhler 2013</span></p>

##Einleitung
##Anwendungsgebiete

###Native Apps
![Windows 8](../assets/win8.jpg)
Microsoft erlaubt es, native Windows 8 - Applikationen komplett in Javascript, HTML und CSS zu entwickeln. 

###Webseiten, Webapps
Javascript findet vorrangig Anwendung in der Entwicklung von Webangeboten. Verbreitet sind Verbesserungen im Sinne des *Progressive Enhancement*, beispielsweise in Form von Bilder-Slidern, Lightboxen, vereinfachter Navigation oder Clientseitiger Formularvalidierung. Für diese relativ verbreiteten Usecases sind oft nur wenige Zeilen Code nötig, um den gewünschten Effekt zu erzielen. Es existiert weiterhin eine Vielzahl von Plugins, die Lösungen für übliche Probleme anbieten.

Hiervon zu unterscheiden ist die Anwendung für die immer populärer werdenden Webapps, also Angebote, die im Browser Funktionalität anbieten, die an den Umfang klassischer Desktopanwendungen heranreicht.

##Überblick Webtechnologien
Moderne Webentwicklung basiert auf der strikten Unterscheidung und Abgrenzung von *Content (Inhalt)*, also inhaltlich strukturiertem Text, Bildern usw., *Style (Gestaltung)*, also Typographie und Farben und ** Behaviour (Verhalten), also Interaktionsmöglichkeiten mit der Internetseite, beispielsweise in Form von Dialogfenstern umfasst.

Für jeden dieser drei Bereiche stehen eigene Programmier- bzw. Markupsprachen zur Verfügung. Eine Vermischung der Aufgabenfelder der Sprachen, beispielsweise die Einflussnahme auf das visuelle Erscheinungsbild Mittels HTML wird im profesionellen Umfeld vermieden. 

###Content: HTML
html (hypertext markup Language) ist ein xml-Dialekt zur Auszeichnung von Internetdokumenten. Es dient lediglich der statischen Strukturierung von Inhalten und ermöglicht keine logischen Programmstrukturen. Möglichkeiten der grafischen Gestaltung, beispielsweise mittels des `<font>`  Elementes, wurden zugunsten der oben beschriebenen Aufgabentrennung wieder aus dem Sprachstandard, der vom W3C (World Wide Web Consortium) festgelegt wird, gestrichen.

	<tag attribute='value'>Inhalt</tag>

###Style: CSS
CSS (Cascading Stylesheet) dienen zur Definition des visuellen Erscheinungsbildes von HTML-Inhalten. Der Aufbau ist relativ einfach: Jede Style-Definition beginnt meit einem *Selektor*, der sich auf ein bestimmtes HTML-Element, oder auf eine Gruppe von Elementen mit den selben Klassen oder Attributen.
Darauf folgen, eingeschlossen vo geschweiften Klammern, die Regeln, die für die selektierten Elemente gelten sollen, so zum Beispiel Hintergrundfarben, Schriften und Abstände. Es steht außerdem eine Reihe von Pseudeoklassen zur Verfügung, mit denen zum Beispiel Elemente selektiert werden können, über denen sich der Mauszeiger befindet (`div:hover`).

	h1 {
		color: slate;
		font-family: 'Open Sans', sans-serif;
		border-bottom: 4px solid gray;
	}
	h1:hover {
		color: black;
	}
	.alert {
		background: red;
	}

###Behaviour: Javascript
##Grundlagen
###Variablen
	var foo = 5;
	var bar = 'hello';
	
	var user = {}
	user.name = 'John Doe'

##Geschichte
Javascript wurde von dem amerikanischen Programmierer und heutigem  Chief Technology Officer der Mozilla Corporation *Brendan Eich* Mitte der 90er Jahre entwickelt. Die erste Implementierung wurde mit dem Netscape Navigator 2.0 im September 1995, zunächst unter dem Namen *LiveScript* ausgeliefert.
Version 3.0 des Internet Explorers August verfügte über einen Interpreter für JScript, wobei die verschiedenen Namen auf Urheberrechtsproblemen beruhten. 

###ECMA-Script
ECMA-Script ist die offizielle Spezifikation, auf der neben Javascript auch andere Skriptsprachen wie das in Verbindung mit Adobe Flash angewendete *Action Script* basieren.
1996 
##Sprachkonzepte
###Dynamic Typing

###Sandbox-Prinzip

##Anwendung 

##Anwendung
Javascript findet breite Anwendung
![Plattformunabhängigkeit](../assets/devices-crop.svg)

##Beispiel: Pong
###Projektstruktur
- Pong
	- index.html
	- js
		- missioncontrol.js
	- css
		- style.css
	- assets
		- background.png
		- paddle.png
###Html/CSS

	<!doctype html>
	<html>
		<head>
			<title>Pong</title>
			<link href='style.css' rel='stylesheet'></link>
			<script src='missioncontrol.js'>
		</head>
		<body>
			<canvas id='world'>
				Whoops! Your browser doesn't support the canvas	element :/
			</canvas>
		</body>
	</html>

