"use strict";

let konto = {
    iban: "DE6206752564419854",
    bic: "WEASE5PXHK",
    inhaber: {
        vorname: "Max",
        nachname: "Mustermann",
        geschlecht: "männlich",
        alter: 25
    },
    kontostand: 3500,
    aktiv: true,
    einzahlen(e) {
        this.kontostand += e;
    },
    abheben(a) {
        this.kontostand -= a;
    }
};

konto.einzahlen(1000);
console.log(konto.kontostand);

// Challenge: Methode in Objekt einbauen

let person = {
    vorname: "Max",
    nachname: "Mustermann",
    alter: 18,
    verarbeiten() {
        return {
            n: `${this.vorname} ${this.nachname}`,
            z: `${this.vorname} ${this.nachname} (${this.alter} Jahre)`,
            b: `Hallo ${this.vorname} ${this.nachname}!`
        };
    }
};

console.log(person.verarbeiten());