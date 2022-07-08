"use strict";


// HTML-COllections haben keine forEach() Methode!
let htmlCollectionJumbotron = document.getElementsByClassName("jumbotron");
let htmlCollectionLi = document.getElementsByTagName("li");

console.log(htmlCollectionJumbotron);
console.log(htmlCollectionLi);

//============= for Schleife ===================================

for (let i = 0; i < htmlCollectionJumbotron.length; i++) {
    console.log(htmlCollectionJumbotron[i]);
}

for (let i = 0; i < htmlCollectionLi.length; i++) {
    console.log(htmlCollectionLi[i]);
}

//============= for...of... Schleife ===================================
for (let e of htmlCollectionJumbotron) {
    console.log(e);
}

// ============= Node-Lists ===================================
// HABEN forEach Methode (!) 

let node_list = document.querySelectorAll("p");
console.log(node_list);

console.log("node_list.forEach(element => { ... }")
node_list.forEach(element => {
    console.log(element);
});

console.log("node_list.forEach(function(element) { ... }")
node_list.forEach(function(element) {
    console.log(element);
});
