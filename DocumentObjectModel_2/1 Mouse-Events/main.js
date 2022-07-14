"use strict";

let jumbo = document.querySelector(".jumbotron");
// jumbo.addEventListener("click", e => {
//     console.log(e);
//     console.log(e.clientX);
//     console.log(e.clientY);
//     console.log(e.target);
// });

// jumbo.addEventListener("dblclick", e => {
//     console.log("DBCLICK:");
//     console.log(e);
// });

jumbo.addEventListener("mousedown", e => {
    console.log("Mousedown:" );
    console.log(e);
});

jumbo.addEventListener("mouseup", e => {
    console.log("Mouseup:" );
    console.log(e);
});

let jumboh2 = document.querySelector(".jumbotron h2");

jumboh2.addEventListener("mouseover", e => {
    console.log("Mouseover:" );
    jumboh2.style.background = "red";
    jumboh2.style.color = "white";
});

jumboh2.addEventListener("mouseout", e => {
    console.log("Mouseout:" );
    jumboh2.style.background = "";
    jumboh2.style.color = "";
});

