"use strict";
// ________________________________________________________________________________________
// ________________________________________________________________________________________

// ====== get 1 Element by ID =========================================
console.log(document.getElementById("navigation")); 

// ====== get all by className =========================================
console.log(document.getElementsByClassName("jumbotron")); 

// ====== get all by HTML tag =========================================
console.log(document.getElementsByTagName("p"));

// ====== Check if Elements exist =========================================
console.log(document.getElementsByClassName("jumbotron").length > 0);

// ________________________________________________________________________________________
// ________________________________________________________________________________________

// ====== Select single HTML Element via Selectors ========================
// !!!! Returns only the first occurance of the element !!!!
let ul = document.querySelector("#navigation > ul");
let navStartseite = document.querySelector("#navigation > ul > li:nth-child(1) > a");
let navHTML = document.querySelector("#navigation > ul > li:nth-child(2) > a");
let navCSS = document.querySelector("#navigation > ul > li:nth-child(3) > a");
let navJavaScript = document.querySelector("#navigation > ul > li:nth-child(4) > a");

console.log(navCSS);
// !!!! Can also select classNames !!!!
let jumbo = document.querySelector(".jumbotron");
console.log(jumbo);

// ====== Select ALL HTML Elements via Selectors ========================
console.log(document.querySelectorAll("a"));

// __________________________________________________________________________________________
// __________________________________________________________________________________________
// HTML-COllections _______ haben keine forEach() Methode! 
let htmlCollectionJumbotron = document.getElementsByClassName("jumbotron");
let htmlCollectionLi = document.getElementsByTagName("li");

console.log(htmlCollectionJumbotron);
console.log(htmlCollectionLi);
//============= for Schleife ===========================================
for (let i = 0; i < htmlCollectionJumbotron.length; i++) {
    console.log(htmlCollectionJumbotron[i]);
}

//============= for...of... Schleife ===================================
for (let e of htmlCollectionJumbotron) {
    console.log(e);
}

// __________________________________________________________________________________________
// __________________________________________________________________________________________
// Node-Lists _______ HABEN forEach Methode (!)  
let node_list = document.querySelectorAll("p");

// ============ Node-List forEach =======================================
console.log("node_list.forEach(element => { ... }")
node_list.forEach(element => {
    console.log(element);
});

console.log("node_list.forEach(function(element) { ... }")
node_list.forEach(function(element) {
    console.log(element);
});

// __________________________________________________________________________________________
// __________________________________________________________________________________________
// Navigieren durch DOM --> Children, Siblings, Parents Nodes =============
let firstChild = ul.firstChild; // erstes Kindelement inkl. Text- und Kommentarnodes
let lastChild = ul.lastChild; // letztes Kindelement "
let firstElementChild = ul.firstElementChild; // " exkl. Text- und Kommentarnodes
let lastElementChild = ul.lastElementChild; // " exkl. Text- und Kommentarnodes

// ============= Geschwisterelemente ====================
let nextSibling = ul.nextSibling; // nächstes Geschwisterelement inkl. Text / Comment nodes
let previousSibling = ul.previousSibling; // vorangehendes Geschwisterelement "
let nextElementSibling = ul.firstElementChild.nextElementSibling; // Nächster Geschwisterknoten eines Elementes EXKL. Text + Comments node
let lastElementSibling = ul.lastElementChild.previousElementSibling; // Letzter Geschwisterknoten eines Elementes EXKL. Text + Comments node

// __________________________________________________________________________________________
// __________________________________________________________________________________________
// Elemente und Attribute erstellen und setzen ===============
let newElement = document.createElement("div");
newElement.setAttribute("class", "myClass");
newElement.setAttribute("id", "element");
console.log(newElement);

// Elemente entfernen ========================================
newElement.remove();
// let jumboSections = document.querySelectorAll(".jumbotron > section");
// jumboSections.forEach(e => { e.remove(); });

// __________________________________________________________________________________________
// __________________________________________________________________________________________
// Element erstellen, Attribut hinzufügen und Kindknoten anhängen ============
let li = document.createElement("li");
let a = document.createElement("a");
let someLink = document.createTextNode("https://www.google.de");

li.setAttribute("id", "myId");
a.setAttribute("href", "#");
a.setAttribute("target", "_blank");

a.appendChild(someLink);
li.appendChild(a);
console.log(li);

// __________________________________________________________________________________________
// __________________________________________________________________________________________
// ClassName =====================
// !!!! Änderung von classNames lässt CSS Eigenschaften nicht mehr greifen !!!!
let classes = jumbo.className;
console.log(classes);

// Konkatinierung von Strings --> Hinzufügen von Classes
jumbo.className += " lorem";
classes = jumbo.className;
console.log(classes);

// Änderung von Klassen
jumbo.className = jumbo.className.replace("lorem", "YOREM");
console.log(jumbo.className);

// Entfernen von Klassen --> Auf leeren String setzen
jumbo.className = jumbo.className.replace("YOREM", "");
console.log(jumbo.className);

// __________________________________________________________________________________________
// __________________________________________________________________________________________
// Active className für Navigation Bar

// Clear current "active" Nav-Element
const clearActive = () => {
    document.querySelector(".active").className="";
}
clearActive();

// Set new active Nav-Element
document.querySelector("#navigation > ul > li:nth-child(4) > a").className = "active";

// Oder
clearActive();
navCSS.className = "active";

// __________________________________________________________________________________________
// __________________________________________________________________________________________
// .classList --> returns DOMTokenList with all Classes of the chosen element
let jumboClassList = jumbo.classList;

// add a Class
jumbo.classList.add("newClass");
console.log(jumboClassList);

// remove a Class
jumbo.classList.remove("jumbotron"); // Design von CSS wird kaputt gehen :,-)
console.log(jumboClassList);

// replace a Class
jumbo.classList.replace("newClass", "jumbotron");
console.log(jumboClassList);

// check if contains a Class
if (jumbo.classList.contains("jumbotron")) { console.log("jumbo enthält die Klasse jumbotron"); }

// ======= TOGGLE !!! Wichtig --> Ein- Ausschalter für Klassen z.B. "active" class !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ====================
console.log("Toggle \"active\" class of navCSS:");
navCSS.classList.toggle("active");
console.log(navCSS.classList);

console.log("Toggle \"active\" class of navCSS AGAIN:");
navCSS.classList.toggle("active");
console.log(navCSS.classList);

// __________________________________________________________________________________________
// __________________________________________________________________________________________
// Set, remove, get and check for Attributes ========================

jumbo.setAttribute("lang", "de");
console.log(jumbo);

// removeAttribute
jumbo.removeAttribute("lang");
console.log(jumbo);

// getAttribute 
console.log("getAttribute(\"lang\") von html tag:");
console.log(document.querySelector("html").getAttribute("lang"));

// hasAttribute
console.log("Check if \"head > link\" has \"rel\" attribute:"),
console.log(document.querySelector("head > link").hasAttribute("rel"));

// __________________________________________________________________________________________
// __________________________________________________________________________________________
// Styles setzen etc. ========================

console.log(jumbo.style.backgroundColor); // !!! Stylesheet wird hier nicht berücksichtigt
jumbo.style.backgroundColor = "grey";
console.log(jumbo.style.backgroundColor);
jumbo.style.width = "85%";
jumbo.style.height = "1000px";
jumbo.style.fontSize = "20px";
jumbo.style.border = "solid 1rem grey";
jumbo.style.boxShadow = "3px 3px 8px 8px rgba(0,0,0,1)";

// __________________________________________________________________________________________
// __________________________________________________________________________________________
// Window Objekt = Objekt der obersten Ebene =================
// Eigenschaften des Window-Objekts --> window.innerWidth; --> innerWidth;

// ==> Effekte wie z.B. fadeIn wenn user scrollt realisierbar anhand scrollY
console.log("scrollY");
console.log(scrollY);

let navStyles= getComputedStyle(document.querySelector("#navigation"));
console.log("CSS styles von #navigation element:")
console.log(navStyles);

// __________________________________________________________________________________________
// __________________________________________________________________________________________
// getComputedStyle() 

let jumboStyle = getComputedStyle(jumbo);
console.log("getComputedStyle(jumbo):")
console.log(jumboStyle);

console.log(jumboStyle.color);
console.log(jumboStyle.width);
console.log(jumboStyle.background);
console.log(jumboStyle.backgroundColor);
console.log(jumboStyle.fontFamily);
console.log(jumboStyle.animation);

// Färbe background-color vom paragraph des ersten jumbotron
document.querySelector(".jumbotron > section > p").style.backgroundColor = "darkslategrey";

// Wähle ALLE elemente des HTML dokuments
let allElements = document.querySelectorAll("*");
console.log("All elements: ");
console.log(allElements);

// Gehe alle elemente durch und durchsuche nach bestimmter backgroundcolor z.B. 
allElements.forEach( e => {
    if (e.style.backgroundColor === "darkslategrey") {
        console.log("Color found at " + e);
    }
});

// Hostname
console.log("Hostname:");
console.log(location.hostname);

// __________________________________________________________________________________________
// __________________________________________________________________________________________