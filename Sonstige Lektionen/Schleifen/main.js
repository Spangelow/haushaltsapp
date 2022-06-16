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

// ======================= Mehrdimensionale Arrays durchlaufen ====================================

let waren = [
    [
        "Äpfel",
        "Birnen",
        "Bananen"
    ],
    [
        "Möhren",
        "Sellerie",
        "Kohl"
    ],
    [
        "Graubrot",
        "Schwarzbrot",
        "Vollkornbrot"
    ]
];

for (let i = 0; i < waren.length; i++) {
    console.log("i: " + waren[i]);
    for (let j = 0; j < waren[i].length; j++) {
        console.log("j: " + waren[i][j]);
    }
}

// ====== [ Array [ Arrays [ Arrays ] ] ] =================
// ====== [ supermarkt [ Personal [ Abteilungen] ], [Lebensmittel [ Abteilungen ] ], [ Non-Food-Artikel [ Abteilungen ] ] ] ====


let supermarkt = [
    [ 
        [
            "Abteilung - Kasse, Moritz K",
            "Abteilung - Kasse, Britta B",
            "Abteilung - Kasse, Ulrike S"
        ],
        [
            "Abteilung - Süßwaren, Karl F",
            "Abteilung - Schreibwaren, Jana R",
            "Abteilung - Konserven, Beate U"
        ],
        [
            "Abteilung - Kassenaufsicht, Beatrix R",
            "Abteilung - Kassenaufsicht, Manuel F",
        ],
        [
            "Abteilung - Management, Gustav R",
            "Abteilung - Management, Heike U"
        ]
    ], 

    [ 
        [
            "Lebensmittel - Obst, Äpfel",
            "Lebensmittel - Obst, Birnen",
            "Lebensmittel - Obst, Bananen"
        ],
        [
            "Lebensmittel - Gemüse, Möhren",
            "Lebensmittel - Gemüse, Sellerie",
            "Lebensmittel - Gemüse, Kohl"
        ],
        [
            "Lebensmittel - Backwaren, Graubrot",
            "Lebensmittel - Backwaren, Schwarzbrot",
            "Lebensmittel - Backwaren, Vollkornbrot"
        ]
    ],

    [ 
        [
            "Süßwaren, Schokolinsen",
            "Süßwaren, Ritter Sport",
            "Süßwaren, Saure Würmer"
        ],
        [
            "Schreibwaren, Block",
            "Schreibwaren, Stift",
            "Schreibwaren, Lineal"
        ],
        [
            "Kosmetik, Lippenstift",
            "Kosmestik, Zahnpasta",
            "Kosmetik, Shampoo"
        ]
    ]
];

for (let i = 0; i < supermarkt.length; i++) {
    for (let j = 0; j < supermarkt[i].length; j++) {
        for (let k = 0; k < supermarkt[i][j].length; k++) {
            console.log(supermarkt[i][j][k]);
        }
    }
}

