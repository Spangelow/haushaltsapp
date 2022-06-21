"use strict";

// aktuelles datum
let d = new Date();

console.log(d);

console.log(Date.now());

let e = new Date(1455818627642);
console.log(e);

let f = new Date("Sep 23 2003 07:52:22");
console.log(f);

// new Date(jahr, monats-index[, tag[, stunde[, minute[, sekunde[, millisekunde]]]]]);
let g = new Date(2021, 11, 6, 12, 15, 22); // Monate: 0 - 11
console.log("g: " + g);

g.setFullYear(1992);
g.setMonth(0);
g.setDate(8);
g.setHours(5);
g.setMinutes(59);
g.setSeconds(59);
console.log("modified g: " + g);

console.log(g.getFullYear());
console.log(g.getMonth());
console.log(g.getDate());
console.log(g.getHours());
console.log(g.getMinutes());
console.log(g.getSeconds());

let newDate = new Date();
console.log(newDate);

let de_DE = newDate.toLocaleString();
console.log(de_DE);

de_DE = newDate.toLocaleString("de-DE");
console.log("deDE: " + de_DE);
let en_US = newDate.toLocaleString("en-US");
console.log("enUS: " + en_US);

let deDE2 = newDate.toLocaleString("de-DE", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
});
console.log("deDE2: " + deDE2);

let deDate = newDate.toLocaleDateString("de-DE", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
});
console.log(deDate);

let enTime = newDate.toLocaleTimeString("en-US");
console.log(enTime);

let deTimeArguments = newDate.toLocaleTimeString("de-DE", {
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
});
console.log(deTimeArguments);