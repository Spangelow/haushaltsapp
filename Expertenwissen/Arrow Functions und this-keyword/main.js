"use strict";

let person = {
    vorname: "Anna",
    nachname: "Müller",
    alter: "28",
    meineMethode() { console.log(this); }
};

person.meineMethode();

let person2 = {
    vorname: "Anna",
    nachname: "Musterfrau",
    alter: 24,
    // Bringt "eigenen Kontext" mit und sorgt dafür, dass "this" den Kontext des ursprünglichen Objektes verliert
    meineMethode() {
        const meineFunktion = function() {
            console.log(this); 
        };
        meineFunktion();
    }
};
person2.meineMethode();


// Funktioniert, da Pfeil Funktionen den Kontext erhalten, aus dem sie aufgerufen werden 
// Es ist daher immer sinnvoll mit Pfeil-Funktionen zu arbeiten!
let person3 = {
    vorname: "Anna",
    nachname: "Musterfrau",
    alter: 24,
    meineMethode() {
        const meineFunktion = () => console.log(this); 
        meineFunktion();
    }
};
person3.meineMethode();