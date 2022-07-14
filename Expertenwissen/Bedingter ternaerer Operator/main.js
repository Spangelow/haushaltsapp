"use strict";

let erdbeschlaeunigung = 15.4;
let panik = false;

erdbeschlaeunigung > 9.81 ? (panik = true, erdbeschlaeunigung = 9.81) : (panik = false, erdbeschlaeunigung = 9.81);
console.log(erdbeschlaeunigung);
console.log(panik);

let farbe = "gelb";
if (farbe ==="rot") {
    console.log("Ich mag rot");
} else if (farbe === "blau") {
    console.log("Blau mag ich auch");
} else if (farbe === "grün") {
    console.log("Grün mag ich nicht");
} else {
    console.log("Zur Farbe " + farbe + " habe ich keine Meinung");
}

console.log(farbe === "rot" ? "Ich mag rot" : farbe === "blau" ? "Blau mag ich auch" : farbe === "grün" ? "Grün mag ich nicht" : `Zur Farbe ${farbe} habe ihc keine Meinung`);