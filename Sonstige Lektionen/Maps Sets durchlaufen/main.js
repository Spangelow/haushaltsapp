"use strict";

let meineMap = new Map();

meineMap.set("Test", "Wert zu Test");
meineMap.set(13, "Wert zu 13");
meineMap.set([], "Wert zu []");
meineMap.set(function() {}, "Wert zur leeren function() {}");
meineMap.set({}, "Wert zur leeren {}");

console.log(meineMap);

let meinSet = new Set();

meinSet.add("Test");
meinSet.add(13);
meinSet.add([]);
meinSet.add(function() {});
meinSet.add({});

console.log(meinSet);

console.log("=========== MAP ================ ")

meineMap.forEach((key, value, map) => {
    console.log(key);
    console.log(value);
    console.log(map);
});

// ODER

console.log("===== for ... OF Schleife =====" );
for (let paar of meineMap) {
    console.log(paar);
}

// Direkt zugreifen auf KEY und VALUE , die in den Arrays stecken, 
//die aus der for...of Schleife gebildet werden 
for (let [key, value] of meineMap) {
    console.log("key: " + key);
    console.log("value: " + value);
}


console.log("=========== SET ================ ")

meinSet.forEach((element, NULL, set) => {
    console.log(element);
    console.log(set);
});

console.log("===== for ... OF Schleife =====" );
for (let value of meinSet) {
    console.log(value);
}

//========================================================
// ============ PART II ==================================
console.log(" ============ PART II ==================================\n");

// console.log(meineMap.entries());
// console.log(meineMap.values());
// console.log(meineMap.keys());

for (let [key, value] of meineMap.entries()) {
    console.log("key: " + key);
    console.log("value: " + value);
}

console.log("For ... of ... map.keys()")
for (let key of meineMap.keys()) {
    console.log(key);
}

console.log("For ... of ... map.values()")
for (let value of meineMap.values()) {
    console.log(value);
}

