"use strict";

console.log("LOS" + new Date());
setTimeout( () => {
    console.log("ENDE" + new Date());
}, 4000);

// clearTimeout(1);

setInterval( () => {
    console.log("hi");
}, 1000);

// clearInterval(1);