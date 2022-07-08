"use strict";

let li = document.createElement("li");
li.setAttribute("id", "myId");
console.log(li);

let a = document.createElement("a");
a.setAttribute("id", "myAnchor");
a.setAttribute("href", "#");
let text = document.createTextNode("MyElement");

a.appendChild(text);
li.appendChild(a);

console.log(li);

//========================== Insert Adjacent Methoden ==========================
// a.insertAdjacentElement
// a.insertAdjacentHTML
// a.insertAdjacentText

// possible Positions:
// beforebegin -- afterbegin -- beforeend -- afterend

// <nav id="navigation">
// <!-- beforebegin --> 
// <ul>
//     <li><a class="active" href="#">Startseite</a></li>
//     <li><a href="#">HTML</a></li>
//     <li><a href="#">CSS</a></li>
//     <li><a href="#">JavaScript</a></li>
//     <!-- beforeend --> 
// </ul>
// <!-- afterend --> 
// </nav>

let liste = document.querySelector("#navigation > ul");
//liste.insertAdjacentElement("beforebegin", li);
liste.insertAdjacentElement("afterbegin", li);
// liste.insertAdjacentElement("beforeend", li);
// liste.insertAdjacentElement("afterend", li);

let domString = "<li id=\"mein-listenelement\"><a href=\"https://google.de\" a target=\”_blank\”>Hi</a>";
liste.insertAdjacentHTML("beforeend", domString);

let moreText = "\nLorem hallo bla bnla bla was geht";
let jumbotronParagraph = document.querySelector(".jumbotron > section");

jumbotronParagraph.insertAdjacentText("beforeend", moreText);