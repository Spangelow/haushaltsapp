"use-strict";

let myObject = {
    name: "Mustermann",
    vorname: "Max",
    alter: 26
};

// Castet das Object in ein zweidimensionales Array mit jeweils Paaren für key und value
let paare = Object.entries(myObject);
console.log(paare);

// Ausgabe von Elementen (jedes paar)
for (let paar of paare) {
    console.log(paar);
    for (let e of paar) {
        console.log(e);
    }
}

// Speichert eigeschaften eines Objekts in einem Array, vgl. map keys
let eigenschaften = Object.keys(myObject);
console.log(eigenschaften);

// Speichert Werte eines Objekts in einem Array, vgl. map values 
let werte = Object.values(myObject);
console.log(werte);

for (let k of Object.keys(myObject)) {
    console.log("for of keys myObject: " + k);
}

for (let v of Object.values(myObject)) {
    console.log("for of values myObject: " + v);
}

console.log("=================");

// Anschließend kann über diese Arrays iteriert werden...
eigenschaften.forEach(element => {
    console.log("forEach keys: " + element);
})

console.log("=================");

werte.forEach(element => {
    console.log("forEach values: " + element);
})