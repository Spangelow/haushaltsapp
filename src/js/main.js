"use strict";

const accountBook = {
  // entry: {
  //   title: null,
  //   type: null,
  //   amount: null,
  //   date: null,
  // },

  entries: [],

  // totalBalance: {
  //   income: 0,
  //   expenses: 0,
  //   balance: 0,
  // },

  totalBalance: new Map(),

  enterEntryData() {
    let newEntry = new Map();
    newEntry.set("title", prompt("Titel eingeben"));
    newEntry.set("type", prompt("Einnahme oder Ausgabe?"));
    newEntry.set("amount", prompt("Betrag eingeben (Komma als Punkt angeben!)"));
    newEntry.set("date", prompt("Datum der Ausgabe/Einnahme (jjjj-mm-tt)?"));
    this.entries.push(newEntry);
    this.calculateBalance();
  },

  printEntries() {
    // Falls printEntries() Teil der addNewEntry() ist
    console.clear();
    this.entries.forEach((element) => {
      console.log(
        `Titel: ${element.get("title")}\nTyp: ${element.get("type")}\nBetrag: ${element.get("amount")}\nDatum: ${element.get("date")}`
      );
    });
  },

  calculateBalance() {
    // let newtotalBalance = {
    //   income: 0,
    //   expenses: 0,
    //   balance: 0,
    // };

    let newtotalBalance = new Map();
    newtotalBalance.set("income", 0);
    newtotalBalance.set("expenses", 0);
    newtotalBalance.set("balance", 0);

    this.entries.forEach((element) => {
      switch (element.get("type")) {
        case "E":
          newtotalBalance.set("income", newtotalBalance.get("income") + element.get("amount"));
          // newtotalBalance.income += element.get("amount");
          break;
        case "A":
          newtotalBalance.set("expenses", newtotalBalance.get("expenses") + element.get("amount"));
          break;
        default:
          console.log(`Der Typ ${element.get("type")} ist nicht bekannt!`);
          break;
      }
    });
    newtotalBalance.set("balance", newtotalBalance.get("income") - newtotalBalance.get("expenses"));
    this.totalBalance = newtotalBalance;
  },

  printBalance() {
    console.log("============== Bilanz ==============");
    console.log("Einnahmen: " + this.totalBalance.get("income"));
    console.log("Ausgaben: " + this.totalBalance.get("expenses"));
    console.log("Bilanz: " + this.totalBalance.get("balance"));
    // let balancePositive = this.totalBalance.balance >= 0; // Wandelt in boolean
    // if (balancePositive) {
    //   console.log(`Die Bilanz ist positiv`);
    // }
    console.log("===================================");
  },

  sortEntriesByDate() {
    console.log("Hallo?");
    this.entries = this.entries.sort((a,b) =>  {
      if (a.date > b.date) {
        // ziehe a weiter nach vorne
        return -1;
      } else if (a.date < b.date) {
        return 1;
      } else {
        return 0;
      }
    });
    console.log(this.entries);  
  },

  addNewEntry() {
    let addAnotherEntry = true;
    while (addAnotherEntry) {
      this.enterEntryData();
      this.printEntries();
      this.calculateBalance();
      // this.printBalance();
      addAnotherEntry = confirm("Einen weiteren Eintrag hinzufügen?");
    }
  },
};

accountBook.addNewEntry();

accountBook.sortEntriesByDate();
accountBook.printEntries();
accountBook.calculateBalance();
accountBook.printBalance();

// console.log(accountBook);
