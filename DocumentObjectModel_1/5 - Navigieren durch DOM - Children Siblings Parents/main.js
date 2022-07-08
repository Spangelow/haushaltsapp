"use strict";

let ul = document.querySelector("#navigation > ul");
// console.log(nav);

// ========== Kindelemente ==========================

// Alle Kindelemente inkl. Text- und Kommentarnodes
let childNodes = ul.childNodes;
let children = ul.children;
console.log(childNodes);
console.log(children); // Alle Kindelemente OHNe Text- und comments

let firstChild = ul.firstChild; // erstes Kindelement inkl. Text- und Kommentarnodes
let lastChild = ul.lastChild; // letztes Kindelement "
let firstElementChild = ul.firstElementChild; // " exkl. Text- und Kommentarnodes
let lastElementChild = ul.lastElementChild; // " exkl. Text- und Kommentarnodes

console.log(firstChild);
console.log(lastChild);
console.log(firstElementChild);
console.log(lastElementChild);

// ============= Geschwisterelemente ====================
let nextSibling = ul.nextSibling; // nächstes Geschwisterelement inkl. Text / Comment nodes
let previousSibling = ul.previousSibling; // vorangehendes Geschwisterelement "
console.log(nextSibling);
console.log(previousSibling); 

let nextElementSibling = ul.firstElementChild.nextElementSibling; // Nächster geschwisterknoten eines Elementes EXKL. Text + Comments node
let lastElementSibling = ul.lastElementChild.previousElementSibling;
console.log(nextElementSibling);
console.log(lastElementSibling);

// ============= Elternelemente ====================
let parentElement = ul.parentElement;
console.log(parentElement);

