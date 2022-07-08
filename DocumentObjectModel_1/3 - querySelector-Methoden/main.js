"use strict";
// querySelector() liefert ein einziges Element des angegebenen CSS Selektors
// Funktioniert NUR mit validen CSS selektoren!!! 
// Methode gibt nur das erste Element der klasse zurück
let pQuery= document.querySelector("p");
console.log("First p element: ");
console.log(pQuery);

let bodyNavUl = document.querySelector("body > #navigation > ul > li:nth-child(3)");
console.log("body > #navigation > ul > li:nth-child(3): ");
console.log(bodyNavUl);

let jumbotron = document.querySelector(".jumbotron");
console.log(".jumbotron: ");
console.log(jumbotron);

let qs3 = document.querySelector(".test");
console.log(".test: "); 
console.log(qs3);

// Liefert NodeList (ähnlich wie HTML collection ein Array ähnliches Objekt)
let queryAllp = document.querySelectorAll("p");
console.log("All p:");
console.log(queryAllp);

let queryAlltest = document.querySelectorAll(".test");
console.log("All .test:");
console.log(queryAlltest);
console.log("queryAlltest.length > 0 : ");
console.log(queryAlltest.length > 0);