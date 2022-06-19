"use strict";


// =========== MAPS ===================================
// Haben Eigenschaften (Keys) und Werte (values)

let meineMap = new Map();

meineMap.set("Test", "Wert zu der Eigenschaft Test");
meineMap.set(13, "Wert zu der Eigenschaft 13");
meineMap.set([], "Wert zu der Eigenschaft []");
meineMap.set(function() {}, "Wert zu der Eigenschaft Funktion()");
meineMap.set({}, "Wert zu der Eigenschaft {}");

// Referenz auf Key --> Holt den value
console.log(meineMap.get("Test"));
console.log(meineMap.get(13));
console.log(meineMap.get([]));
console.log(meineMap.get(function() {}));
console.log(meineMap.get({}));

console.log(meineMap.has(13));
console.log(meineMap.has(15));
console.log(meineMap.has({}));
console.log(meineMap.has([]));

meineMap.delete("Test");

// meineMap.clear();

console.log(meineMap.size);
console.log(meineMap);

console.log("\n\n=========== MAPS ===================================");
// =========== MAPS ===================================
// Haben nur Werte | Alle Werte in einem Set sind einzigartig

let meinSet = new Set();

meinSet.add("Test");
meinSet.add(13);
meinSet.add([]);
meinSet.add(function() {});
meinSet.add({});
meinSet.add(13); // nichts passiert, da Elemente im Set unique

// {} !== {}
// Zwei Objekte sind niemals gleich, außer sie sind dasselbe Objekt!!!
meinSet.add({}); // Wird also hinzugefügt!

// Bis auf primitive Datentypen (Number, String, Boolean) sind alles Objekte
// => Funktionen, Arrays, Sets, Maps ... 

console.log(meinSet.has("Test"));
console.log(meinSet.has("Beispiel"));
console.log(meinSet.has(13));
console.log(meinSet.has(7+6));
console.log(meinSet.has(15));
console.log(meinSet.has({})); // {} !== {}  Kein Objekt ist gleich, es sei den es ist Dasselbe
console.log(meinSet.has([])); // [] !== []

console.log(meinSet);

console.log(meinSet.delete("Test"));

// meinSet.clear();
console.log(meinSet.size);

console.log(meinSet);