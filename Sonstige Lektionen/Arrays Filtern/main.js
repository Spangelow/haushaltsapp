"use strict";

let zahlen = [
  12, 23, 45, 67, 89, 1, 50, 100, 11, 22, 33, 44, 55, 66, 77, 88, 99,
];

console.log(zahlen);

let filter = zahlen.filter((number) => number < 12);

console.log("Zahlen des arrays < 12: " + filter);

let gerade = zahlen.filter((number) => number % 2 == 0);
console.log("Gerade Zahlen des arrays: " + gerade);

let ungerade = zahlen.filter((number) => number % 2 != 0);
console.log("Ungerade Zahlen des arrays: " + ungerade);

// ===================== Anagram Checker =============================

let words = ["Peters", "Anna", "Piers", "Hannah", "Jees", "Otto", "Friedrich"];

let anagramTest = function (array) {
  for (let i = 0; i < array.length; i++) {
    let wordArray = words[i].toLowerCase().split("");
    console.log(wordArray);
    if (wordArray.length%2 === 0) {
        // Gerade Anzahl Buchstaben
        for(let j = 0; wordArray.length != 0; j++) {
            let first = wordArray.shift();
            let last = wordArray.pop();
            if (first === last) {
                console.log(`${first} = ${last}`);
                if(wordArray.length === 0) {
                    console.log(words[i] + " ist ein Anagram");
                }
            } else { 
                break;
            }
        }
    }
  }
};

anagramTest(words);

words.push("Lenny", "Jeffrey", "Kimmik", "Phillihp");

let numbers = [22,333,2134];

anagramTest(words);
