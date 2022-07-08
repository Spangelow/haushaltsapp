"use strict";

let nav = document.querySelector("#navigation");

let navId = document.querySelector("#navigation").id;
// nav.id
console.log(navId);

// ID navigation geht verloren --> Nav leiste geht kaputt
nav.setAttribute("id", "neueId");


// nav.id = "";

