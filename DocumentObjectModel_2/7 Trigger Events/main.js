"use strict";

let link = document.querySelector("nav > ul > li:nth-child(1) > a");
let input = document.querySelector("input[type=text]");
let formular = document.querySelector("form");

setTimeout(() => link.click(), 3000);
setTimeout(() => input.focus(), 6000);
setTimeout(() => input.blur(), 8000);
setTimeout(() => formular.reset(), 10000);
setTimeout(() => formular.submit(), 10000);