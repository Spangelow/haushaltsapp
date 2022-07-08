"use strict";

let newElement = document.createElement("div");
console.log(newElement);

let newAtr = document.createAttribute("id");
newAtr.value = "myId"; 
newAtr.value ="newId";  
console.log(newAtr);

// Komplizierter Weg...
newElement.setAttributeNode(newAtr);
console.log(newElement);

newElement.setAttribute("class", "myClass");
console.log(newElement);

let text = document.createTextNode("Test eins zwei drei vier");
console.log(text);
