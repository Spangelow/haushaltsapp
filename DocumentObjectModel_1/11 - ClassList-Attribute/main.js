"use strict";

// ==========================================================================================================

let navCSS = document.querySelector("#navigation > ul > li:nth-child(3) > a");

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

let jumbo = document.querySelector(".jumbotron");
// classList returns a DOMTokenList ...
let jumboClassList = jumbo.classList;

// add
jumbo.classList.add("newClass");
console.log(jumboClassList);

// remove
jumbo.classList.remove("jumbotron"); // Design von CSS wird kaputt gehen :,-)
console.log(jumboClassList);

// replace
jumbo.classList.replace("newClass", "jumbotron");
console.log(jumboClassList);

// contains
if (jumbo.classList.contains("jumbotron")) {
    console.log("jumbo enthält die Klasse jumbotron");
}

// TOGGLE !!! Wichtig --> Ein- Ausschalter für Klassen
jumbo.classList.toggle("newClass");
console.log("Toggle newClass:");
console.log(jumboClassList);
jumbo.classList.toggle("newClass");
console.log("Toggle newClass again:");
console.log(jumboClassList);