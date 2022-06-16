"use-strict";

let waren = [
  [
    "Äpfel", 
    "Birnen", 
    "Bananen"
],
  [
    "Möhren", 
    "Sellerie", 
    "Kohl"
],
  [
    "Vollkornbrot", 
    "Roggenbrot", 
    "Dinkelbrot"
],
];

console.log(waren);
console.log(waren[0][0]);
console.log(waren[0][1]);
console.log(waren[0][2]);
console.log(waren[1][0]);
console.log(waren[1][1]);
console.log(waren[1][2]);
console.log(waren[2][0]);
console.log(waren[2][1]);
console.log(waren[2][2]);
console.log("======================================");
console.log("=== Elemente hinzufügen/entfernen ====");
console.log("======================================");

// push(): Fügt ein Element am ENDE des Arrays hinzu (und gibt die neue Größe des Arrays zurück) - destruktiv

waren.push(["Spielzeug", "Block", "Stifte"]);
console.log("Waren nach push():\n" + waren);

// pop(): Entfernt das LETZTE Element aus dem Array (und gibt es zurück) - destruktiv
let letztesElement = waren.pop();
console.log("Letztes Element (pop()): " + letztesElement);
console.log("Waren nach pop():\n" + waren);

// unshift(): Fügt ein Element am ANFANG des Arrays hinzu (und gibt die neue Größe des Arrays zurück) - destruktiv

waren.unshift(["Spielzeug", "Block", "Stifte"]);
console.log("Waren nach unshift():\n" + waren);

// shift(): Entfernt das ERSTE Element aus dem Array (und gibt es zurück) - destruktiv
let erstesElement = waren.shift();
console.log("Erstes Element (shift()): " + erstesElement);
console.log("Waren nach shift():\n" + waren);

