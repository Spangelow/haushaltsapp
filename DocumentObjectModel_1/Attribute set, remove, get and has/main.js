"use strict";

// setAttribute
document.querySelector(".jumbotron").setAttribute("lang", "de");

// removeAttribute
document.querySelector("head > meta:nth-of-type(3)").removeAttribute("content");

// getAttribute 
console.log(document.querySelector("html").getAttribute("lang"));

// hasAttribute
console.log(document.querySelector("head > link").hasAttribute("rel"));