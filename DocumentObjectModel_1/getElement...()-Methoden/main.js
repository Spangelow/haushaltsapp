"use strict";

let getElById = document.getElementById("navigation");
console.log(getElById);

let getElementsByClassName = document.getElementsByClassName("jumbotron");
console.log(getElementsByClassName);
// Überprüfen auf Inhalt 
console.log(getElementsByClassName.length > 0);

console.log(document.getElementsByTagName("p"));