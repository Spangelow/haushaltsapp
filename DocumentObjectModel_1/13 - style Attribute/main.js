"use strict";

let jumbo = document.querySelector(".jumbotron");
console.log(jumbo.style);
// Not inline CSS --> Stylesheet
console.log(jumbo.style.backgroundColor);
jumbo.style.backgroundColor = "blue";
console.log(jumbo.style.backgroundColor);
jumbo.style.width = "85%";
jumbo.style.height = "1000px";
jumbo.style.fontSize = "20px";
jumbo.style.border = "solid 1rem grey";
jumbo.style.boxShadow = "3px 3px 8px 8px rgba(0,0,0,1)";