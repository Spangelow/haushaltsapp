"use-strict";

// Funktionen als Übergabeparameter, 1. Funktion kann so die 2. Funktion ausführen

// let funktion1 = function() {
//     console.log("Ich bin Funktion 1!");
// };

let funktion2 = function(f) {
    console.log("Ich bin Funktion 2!"); 
    f();
};

// funktion2(funktion1);

funktion2(function() {
    console.log("Ich bin Fu 1");
});
