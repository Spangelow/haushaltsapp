"use strict";

// Variablen anlegen für eingabefelder Titel, Typ, Betrag, Datum
// Ausgabe der prompt eingaben in der konsole
// Einnahmen, Ausgaben, Bilanz

let income = 0;
let expenses = 0;

let title = prompt("Titel eingeben");
let type = prompt("Einnahme oder Ausgabe?");
let amount = prompt("Betrag eingeben (Komma als Punkt angeben!)");
let date = prompt("Datum der Ausgabe/Einnahme (jjjj-mm-tt)?");
console.log("Titel: " + title);
console.log("Einnahme oder Ausgabe: " + type);
console.log("Betrag: " + amount);
console.log("Datum: " + date);

if(type === "Einnahme") {
    income += amount;
} else if (type === "Ausgabe") {
    expenses += amount;
}

let balance = income - expenses;
console.log("Einnahmen: " + income);
console.log("Ausgaben: " + expenses);
console.log("Bilanz: " + balance);