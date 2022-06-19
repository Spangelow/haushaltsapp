"use strict";

const accountBook = {
  // entry: {
  //   title: null,
  //   type: null,
  //   amount: null,
  //   date: null,
  // },

  entries: [],

  totalBalance: {
    income: 0,
    expenses: 0,
    balance: 0,
  },

  enterEntryData() {
    this.entries.push({
      title: prompt("Titel eingeben"),
      type: prompt("Einnahme (E) oder Ausgabe (A)?"),
      amount: parseFloat(prompt("Betrag eingeben (Komma als Punkt angeben!)")),
      date: prompt("Datum der Ausgabe/Einnahme (jjjj-mm-tt)?"),
    });
    this.calculateBalance();
  },

  // printEntries() {
  //   this.entries.forEach(element => {
  //     for (let pair of Object.entries(element)) {
  //       //console.log(pair);
  //       let count = 0;
  //       for (let e of pair) {
  //         console.log(e);
  //         if (count%2) {
  //           console.log("================");
  //         }
  //         count++;
  //       }
  //     }
  //   });
  // },
  printEntries() {
    // Falls printEntries() Teil der addNewEntry() ist
    console.clear();
    this.entries.forEach((element) => {
      console.log(
        `Titel: ${element.title}\nTyp: ${element.type}\nBetrag: ${element.amount}\nDatum: ${element.date}`
      );
    });
  },

  calculateBalance() {
    let newtotalBalance = {
      income: 0,
      expenses: 0,
      balance: 0,
    };

    this.entries.forEach((element) => {
      switch (element.type) {
        case "E":
          newtotalBalance.income += element.amount;
          break;
        case "A":
          newtotalBalance.expenses += element.amount;
          break;
        default:
          console.log(`Der Typ ${element.type} ist nicht bekannt!`);
          break;
      }
    });
    newtotalBalance.balance = newtotalBalance.income - newtotalBalance.expenses;
    this.totalBalance = newtotalBalance;
  },

  printBalance() {
    console.log("============== Bilanz ==============");
    console.log("Einnahmen: " + this.totalBalance.income);
    console.log("Ausgaben: " + this.totalBalance.expenses);
    console.log("Bilanz: " + this.totalBalance.balance);
    let balancePositive = this.totalBalance.balance >= 0; // Wandelt in boolean
    if (balancePositive) {
      console.log(`Die Bilanz ist positiv`);
    }
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
