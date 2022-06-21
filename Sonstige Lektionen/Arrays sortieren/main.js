"use strict";

// Zahlen Array aufsteigend sortieren

let zahlen = [1,20,2000,1000000,50, -5, 0];

let aufsteigend = zahlen.sort((a,b) => a - b);
console.log(aufsteigend);

let absteigend = zahlen.sort((a,b) => b - a);
console.log(absteigend);



// Strings alphabetisch sortieren (Großbuchstaben, Kleinbuchstaben)

let wolfgang = ["Das", "ist", "Wahnsinn", "warum", "schickst", "du", "mich", "in", "die", "Hölle", "?"];

let alphabetischSortiert = wolfgang.sort();
console.log(alphabetischSortiert);


