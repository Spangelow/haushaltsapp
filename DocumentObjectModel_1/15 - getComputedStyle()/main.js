"use strict";

// Ermöglicht den Zugriff auf alle Styles, die auf ein jeweiliges Objekt/Element angewendet werden,
// egal woher diese stammen --> stylesheet.css, inline css ...

let jumbo = document.querySelector(".jumbotron");
let jumboStyle = getComputedStyle(jumbo);
console.log(jumboStyle);

console.log(jumboStyle.color);
console.log(jumboStyle.width);
console.log(jumboStyle.background);
console.log(jumboStyle.backgroundColor);
console.log(jumboStyle.fontFamily);
console.log(jumboStyle.animation);

document.querySelector(".jumbotron > section > p").style.backgroundColor = "red";
let allElements = document.querySelectorAll("*");
console.log(allElements);
allElements.forEach( e => {
    if (e.style.backgroundColor === "red") {
        console.log("Red found at " + e);
    }
});