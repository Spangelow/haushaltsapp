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
      type: prompt("Einnahme oder Ausgabe?"),
      amount: prompt("Betrag eingeben (Komma als Punkt angeben!)"),
      date: prompt("Datum der Ausgabe/Einnahme (jjjj-mm-tt)?"),
    });
  },

  // printEntry(title, type, amount, date) {
  //   console.log(
  //     `Titel: ${title}\nTyp: ${type}\nBetrag: ${amount}\nDatum: ${date}`
  //   );
  // },

  // calculateBalance(type, amount) {
  //   switch (type) {
  //     case "Einnahme":
  //       accountBook.totalBalance.income += amount;
  //       this.totalBalance.balance += amount;
  //       break;
  //     case "Ausgabe":
  //       this.totalBalance.expenses += amount;
  //       this.totalBalance.balance -= amount;
  //       break;
  //     default:
  //       console.log(`Der Typ ${type} ist nicht bekannt!`);
  //       break;
  //   }
  // },

  // printBalance() {
  //   console.log("Einnahmen: " + this.totalBalance.income);
  //   console.log("Ausgaben: " + this.totalBalance.expenses);
  //   console.log("Bilanz: " + this.totalBalance.balance);
  //   let balancePositive = this.totalBalance.balance >= 0; // Wandelt in boolean
  //   console.log(`Positive Bilanz: ${balancePositive}`);
  // },

  addNewEntry() {
    this.enterEntryData();
    this.printEntry();
    // this.printEntry(
    //   this.entry.title,
    //   this.entry.type,
    //   this.entry.amount,
    //   this.entry.date
    // );
    // this.calculateBalance(this.entry.type, this.entry.amount);
    // this.printBalance(
    //   this.totalBalance.income,
    //   this.totalBalance.expenses,
    //   this.totalBalance.balance
    // );
  },
};

accountBook.addNewEntry();
accountBook.addNewEntry();
// console.log(accountBook);
