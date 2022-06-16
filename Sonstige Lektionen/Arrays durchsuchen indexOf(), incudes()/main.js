"use-strict";

let personen = [
    "Sebastian", 
    "Dennis", 
    "Anna",
    "Mia",
    "Jeffrey",
    "Anna"
]

// ============= includes(element) ===================
if(personen.includes("Sebastian")) {
    console.log("Incdludes: Gefunden");
}
console.log("Personen includes \"Sebastian\": " + personen.includes("Sebastian"));
console.log("Personen includes \"Sebastian\" in personen[1] or above: " + personen.includes("Sebastian",1));


// =========== indexOf(element) --> nennt erste Stelle, an der gesuchtes Element vorkommt ==============
console.log(personen.indexOf("Jeffrey"));
console.log(personen.indexOf("Anna"));
console.log("IndexOf(\"Herbert\"): " + personen.indexOf("Herbert"));

// =========== indexOf(element, startIndex) ============================
console.log("Jeffrey from startIndex 2 : " + personen.indexOf("Jeffrey", 2));
console.log("Jeffrey from startIndex 5 : " + personen.indexOf("Jeffrey", 5));

let numberOfIndex = personen.indexOf("Mia");
console.log(numberOfIndex);
delete personen[numberOfIndex];
console.log(personen);
console.log("Length: " + personen.length);

// ======== lastIndexOf(element) --> nennt letzte Stelle, an der gesuchtes Element vorkommt ===============
console.log("lastIndexOf(\"Anna\"): " + personen.lastIndexOf("Anna"));


// =========== join() =======================================
console.log("join()" + personen.join());
console.log("join(\"\"): " + personen.join("")); 
console.log("join(\"\"): " + personen.join("-")); 