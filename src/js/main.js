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
    newEntry.set("title", prompt("Titel eingeben").trim());
    newEntry.set("type", prompt("Einnahme oder Ausgabe?").trim());
    newEntry.set("amount", this.convertAmount(prompt("Betrag eingeben (ohne € Zeichen)").trim()));
    // newEntry.set("date", new Date(prompt("Datum (jjjj-mm-tt):").trim() + " 00:00:00"));
    newEntry.set("date", this.convertDate(prompt("Datum (jjjj-mm-tt):").trim()));
    newEntry.set("timestamp", Date.now());
    this.entries.push(newEntry);
    this.calculateBalance();
  },

  convertAmount(amount) {
    if(this.validateAmount(amount)) {
      return parseFloat(amount.replace(",", ".")) * 100;
    } else {
      console.log(amount + " ist kein gültiger Betrag.\nBitte eine gültige Zahl als Betrag eingeben!")
      return false;
    }
  },

  validateAmount(amount) {
    // ^ = begins with, \d+ = any amount digits, (,|.) = , or . ,
    // \d\d? = at least 1 digit 2nd digit optional, $ = line end 
    if (amount.match(/^\d+((,|\.)\d\d?)?$/) !== null) {
      return true;
    } else {
      return false;
    }
  },

  convertDate(date) {
    if(this.validateDate(date)) {
      return new Date(datum + " 00:00:00");
    } else {
      console.log(date + " ist kein gültiges Datum.\nBitte ein Datum in der Form JJJJ-MM-DD eingeben!")
      return false;
    }
  },

  validateDate(date) {
    // ^ = begins with, \d+ = any amount digits, (,|.) = , or . ,
    // \d\d? = at least 1 digit 2nd digit optional, $ = line end 
    if (date.match(/\d{4}-\d{2}-\d{2}/) !== null) {
      return true;
    } else {
      return false;
    }
  },



  printEntries() {
    // Falls printEntries() Teil der addNewEntry() ist
    console.clear();
    this.entries.forEach((element) => {
      console.log(
        `Titel: ${element.get("title")}\nTyp: ${element.get("type")}\nBetrag: ${(element.get("amount") / 100).toFixed(2)} €\nDatum: ${element.get("date").toLocaleDateString("de-DE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        })}\nTimestamp: ${element.get("timestamp")}`
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
    console.log("Einnahmen: " + (this.totalBalance.get("income") / 100).toFixed(2) + " €");
    console.log("Ausgaben: " + (this.totalBalance.get("expenses") / 100).toFixed(2) + " €");
    console.log("Bilanz: " + (this.totalBalance.get("balance") / 100).toFixed(2) + " €");
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
