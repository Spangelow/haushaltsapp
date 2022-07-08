"use strict";

console.log(Math);

const berechneKreis = (r) => {
    return Math.PI * Math.pow(2,2);
}

console.log(berechneKreis(2));

console.log(Math.round(Math.PI));
// RUNDEN 
let abgerundet = Math.floor((Math.PI*100)) / 100;
console.log(abgerundet);

// Runden und Nachkommastellen
let aufgerundet = Math.ceil((Math.PI*100)) / 100;
console.log(aufgerundet);

// Strings in Zahlen umwandeln
let nachkommastellen = parseFloat(Math.PI.toFixed(5));
console.log(nachkommastellen);
console.log(parseInt(nachkommastellen));

// Zufallszahlen [ 0 - 1 )
let minimum = 40;
let maximum = 60;

let random = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
console.log(random);

const zufallszahl = ((min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
});

console.log(zufallszahl(40,60)); 