"use strict";

// Capturing & Bubbling 
// Capturing phase, target phase, bubbling phase

// Capturing phase: Der Vorgang, bei dem das Event vom Window object zum jeweils geklickten Element läuft (hierarchisch)
// z.B. bei click auf h2: window -> html -> body -> article -> header -> h2 (target phase hier)

// Target phase: Event kommt beim jeweiligen Element an 

// Bubbling phase: Event durchläuft den o.g. Prozess rückwärts (hierarchisch) wieder hoch --> click auf h2 -> header -> article -> body -> html -> window

let element1 = document.querySelector("#navigation > ul > li:nth-of-type(1) > a");
let element1_parent = element1.parentElement;
let element2 = document.querySelector("#navigation > ul > li:nth-of-type(2) > a");
let element2_parent = element2.parentElement;

// preventDefault() verhindert standardverhalten eines Elementes --> Event listener werden dennoch ausgeführt
// Link-Aufruf wird verhindert, aber console.log() passiert
element1.addEventListener("click", e => {
    e.preventDefault();
    console.log("element1 hat es mitbekommen!");
});

element1_parent.addEventListener("click", e => {
    console.log("element1_parent hat es mitbekommen!");
});

// Ruft NUR das geklickte Element auf und öffnet Link, aber Elternelement wird nicht aufgerufen
// Bubbling-phase wird verhindert --> "Weitergabe" wird gestoppt 
element2.addEventListener("click", e => {
    e.stopPropagation();
    console.log("element2 hat es mitbekommen!");
});

element2_parent.addEventListener("click", e => {
    console.log("element2_parent hat es mitbekommen!");
});