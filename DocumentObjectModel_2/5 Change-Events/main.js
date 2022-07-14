"use strict";

let input = document.querySelector("input[type=text]");
input.addEventListener("change", e => {
    console.log(e);
});
let textarea = document.querySelector("textarea");
textarea.addEventListener("input", e => console.log(e));

let checkboxen = document.querySelectorAll("input[type=checkbox]");
checkboxen.forEach(e => {
    e.addEventListener("change", e => {
        console.log(e);
        if(e.target.checked) {
            console.log("Checked " + e.target.value);
        } else if (!e.target.checked) {
            console.log("Unchecked " + e.target.value);
        }
    });
});

let radiobuttons = document.querySelectorAll("input[type=radio]");
radiobuttons.forEach( e => {
    e.addEventListener("change", e => {
        console.log(e.target.value);
    });
});

let range = document.querySelector("input[type=range]");
range.addEventListener("change", e => {
    console.log(e.target.value * 10 + "%");
});