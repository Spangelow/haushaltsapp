"use strict";

let jumbo = document.querySelector(".jumbotron");
let classes = jumbo.className;
console.log(classes);

// CSS vergisst styles --> className ist eine andere --> Website veärndert sich
jumbo.className = "myClass";
classes = jumbo.className;
console.log(classes);

// Konkatinierung von Strings --> Hinzufügen von Classes
jumbo.className += " lorem";
classes = jumbo.className;
console.log(classes);

// Änderung von Klassen
jumbo.className = jumbo.className.replace("lorem", "YOREM");
console.log(jumbo.className);

// Entfernen von Klassen 
jumbo.className = jumbo.className.replace("YOREM", "");
console.log(jumbo.className);

let navStartseite = document.querySelector("#navigation > ul > li:nth-child(1) > a");
let navHTML = document.querySelector("#navigation > ul > li:nth-child(2) > a");
let navCSS = document.querySelector("#navigation > ul > li:nth-child(3) > a");
let navJavaScript = document.querySelector("#navigation > ul > li:nth-child(4) > a");

// ==========================================================================================================

// Clear current "active" Nav-Element
const clearActive = () => {
    document.querySelector(".active").className="";
}

clearActive();

// Set new active Nav-Element
document.querySelector("#navigation > ul > li:nth-child(4) > a").className = "active";
// Alternatively
clearActive();
navCSS.className = "active";

// ==========================================================================================================

