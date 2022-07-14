"use strict";

let word = "";
document.addEventListener("keyup", e => {
    if (e.key === "Backspace") {
        word = "";
        console.log("Cleared");
    } else {
        word += e.key;
        console.log(word);
        if (word === "google") {
            window.open("https://www.google.de","_blank");
        } else if (word === "exit") {
            window.close();
        }
    }
});


// document.keydown
// document.keyup
// document.keypress --> hört nicht auf Shift, Fn und CapsLock