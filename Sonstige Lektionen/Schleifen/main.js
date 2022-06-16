"use-strict";
let i = 5;
while (i > 0) {
    if(i === 3) {
        continue;
        console.log("i ist 3");
    } 
    console.log(i);
    i--;
}

let namen = [
    "Hans",
    "Peter",
    "Anna",
    "Mia",
    "Sepp",
    "Karl",
    "Andrea"
];

for(let i = 0; i <= namen.length; i++) {
    console.log("Name: " + namen[i]);
}