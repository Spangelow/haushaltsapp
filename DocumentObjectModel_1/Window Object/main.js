"use strict";

console.log(window);
// Window Objekt = Objekt der obersten Ebene
// Eigenschaften des Window-Objekts
// window.innerWidth; --> innerWidth;

console.log(innerWidth);
console.log(innerHeight);
console.log(outerWidth);
console.log(outerHeight);

console.log("scrollX");
console.log(scrollX);

// ==> fadeIn wenn user scrollt
console.log("scrollY");
console.log(scrollY);

// Für später ...
console.log(localStorage);
console.log(location);
console.log(sessionStorage);

// Methoden des Window Objektes

// alert("hi");
console.log(confirm("Bist du Dir sicher?"));
let eingabe = prompt("Wie geht es dir?");
console.log(eingabe);
print();
open("https://www.google.de");

let nav = document.querySelector("#navigation");
let navStyles= getComputedStyle(nav);
console.log(navStyles);