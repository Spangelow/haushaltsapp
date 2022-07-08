"use strict";

let nav = document.querySelector("#navigation");
nav.remove();
console.log(nav);

let jumbo = document.querySelectorAll(".jumbotron > section");
jumbo.forEach(e => {
    e.remove();
});