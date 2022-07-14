"use strict";

// const add = (array) => {
//     let sum = 0;
//     array.forEach(e => sum += e);

//     return sum;
// };

// console.log(add([1,5,22,68,199]));

const add = (...summanden) => {
    let sum = 0;
    summanden.forEach(e => sum += e);

    return sum;
};

console.log(add(2,55,23,13,512));

const addPersons = (name1, name2, ...numbers) => {
    let sum = 0;
    numbers.forEach(e => sum += e);
    return `${name1} und ${name2} haben insgesamt ${sum} Punkte gesammelt`;
};

console.log(addPersons("Jan", "Mona", 23,44,99,36,87,1));