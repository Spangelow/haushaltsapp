"use-strict";

let array = [ 55, 22, 32, 67, 92, 81, 1 ];

array.forEach(element => console.log(element));

console.log("================================")

// The same as above!
array.forEach(function(e) { console.log(e) });


let myArray = [
    "Steven",
    "Peter",
    "Mia",
    "Mark"
];

let personenObject = {
    name: "Max",
    vorname: "Musterman",
    alter: "26"
};

console.log(myArray);
console.log(personenObject);

// For-in Schleife --> Durchläuft Attribute/Eigenschaften, 

// Bei Array (als besonderes Objekt) wird so 0, 1, 2, ... ausgeben, weil ein
// Array diese eigenschaften hat --> 0: "Steven", 1: "Peter", ...

for (let e in myArray) {
    console.log(e);
}
 
for (let e in personenObject) {
    console.log(e);
    console.log(personenObject[e]);
}

console.log("================");

// For-of Schleife --> Objekt is NICHT iterabel, for of  können wir keine Werte eines OBjektes durchlaufen
// sondern nur die Werte eines Arrays
// Für Arrays gute alternative zur for Schleife

for (let w of myArray) {
    console.log(w);
}


// Geht NICHT, da einfache Objekte nicht iterierbar sind!!!
// for (let w of personenObject) {
//     console.log(w);
// }