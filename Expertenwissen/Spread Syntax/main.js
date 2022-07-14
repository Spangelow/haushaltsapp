"use strict";

// ARRAYS
const numbers = [0,12,44,88,62];
const add = (a,b,c) => {
    return a+b+c;
};

console.log(add(...numbers));

console.log(add(numbers[0],numbers[1],numbers[2]));

const kleinesArray = ["Apfel", "Birne", "Banane"];
const großesArray = [...kleinesArray, "Traube", "Orange"];
console.log(großesArray);

const sehrGroßesArray = ["Zitrone", ...kleinesArray, "Kiwi", ...großesArray, "Mango", "Ananas"];
console.log(sehrGroßesArray);

// OBJEKTE
let kleinesObjekt = {
    name: "Kleines Objekt",
    groesse: 2,
    objekt: true
};

let großesObjekt = {
    ...kleinesObjekt,
    betreff: "Spread Syntax",
    datum: new Date()
};

console.log(großesObjekt);

// Für INSTANZEN von OBJEKTEN
let datumsWerte = [2020, 4, 14];
let datum = new Date(...datumsWerte); // erzeugt neue Instanz eines Date Objektes...
console.log(datum);