"use-strict";

let essen = "Döner";

// Ein Fall trifft zu
switch (essen) {
  case "fall1":
    console.log("Fall1");
    break;
  case "fall2":
    console.log("Fall2");
    break;
  case "fall3":
    console.log("Fall3");
    break;
  default:
    console.log("DEFAULT");
    break;
}

// Mehrere Fälle treffen zu


switch (essen) {
  case "Nudeln":
  case "Pizza":
  case "Steak":
    console.log(`${essen} mag ich!`);
    break;

  case "Fisch":
  case "Hummer":
  case "Kaviar":
    console.log(`${essen} mag ich nicht :(`);
    break;

  default:
    console.log(`Ich kenne ${essen} nicht. Was ist das?`);
}
