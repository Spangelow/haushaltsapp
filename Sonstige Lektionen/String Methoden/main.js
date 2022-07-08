"use strict";

let s = " Lorem ipsum dolor sit amet ipsum.      ";

// Einzige Eigenschaft des Strings ( keine Methode ) 
console.log("Length: " + s.length); 

// Case sensitive ==> Bei not found -1
console.log("indexOf(\"ipsum\"): "+ s.indexOf("ipsum"));
console.log("indexOf(\"ipsum\", 20): " + s.indexOf("ipsum", 20));

// Case sensitive ==> Bei not found -1
console.log("lastIndexOf(\"ipsum\"): " + s.lastIndexOf("ipsum"));
console.log("lastIndexOf(\"ipsum\", 10): " + s.lastIndexOf("ipsum", 10));

// Case sensitive
console.log("includes(\"sit\"): " + s.includes("sit"));
console.log("includes(\"sit\", 28): " + s.includes("sit", 28));

console.log("toLowerCase(): " + s.toLowerCase());
console.log("toUpperCase(): " + s.toUpperCase());

// Schneidet whitespace am Anfang und Ende weg ==> User Name zB
console.log("trim(): " + s.trim());

console.log("repeat(5): " + s.repeat(5));

/* ================ REGEX ========================
Regex z.B
\w{5}    Alle Wörter mit 5 Buchstaben
d\w{3}r  Alle Wörter mit 5 Buchstaben, die mit d starten und mit r enden

Die folgenden 3 Methoden erwarten eine regex als Übergabe, wird ein normaler String übergeben, so wandeln
die Methoden Diesen automatisch in eine Regex um.
*/

let regex = /i\w{4}/ // findet nur ersten Treffer
let regexGlobal = /i\w{4}/g // g flag --> global, gibt alle Treffer aus

// Kein Startindex, 
console.log("search(\"ipsum\"): " + s.search("ipsum"));
console.log("search(regex): " + s.search(regex));

console.log("replace(\"ipsum\", \"opsum\"): " + s.replace("ipsum", "opsum"));
console.log("replace(regex, \"opsum\"): " + s.replace(regex, "opsum"));

console.log("match(\"ipsum\"): " + s.match("ipsum"));
console.log("match(regex): " + s.match(regex));
console.log("match(regexGlobal): " + s.match(regexGlobal));

