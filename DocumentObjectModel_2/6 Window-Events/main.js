"use strict";

// resize
window.addEventListener("resize", e => {
    console.log(e);
});

// scroll
window.addEventListener("scroll", e => {
    console.log(e);
    console.log(scrollX);
    console.log(scrollY);
});

// load
window.addEventListener("load", e => {
    console.log(e);
    console.log("Alles geladen");
});