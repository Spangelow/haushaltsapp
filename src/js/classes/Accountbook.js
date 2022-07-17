"use strict";

class AccountBook {
    "use strict";

    constructor() {
        this._entries = [];
        this._navigation = new Navigation();
        this._formular = new Formular();
        this._monthListCollection = new MonthListCollection();
        this._totalBalance = new TotalBalance();   
    }

  addNewEntry(formularData) {
    let newEntry = new Entry(formularData.title, formularData.type, formularData.amount, formularData.date);
    this._entries.push(newEntry);
    this._monthListCollection.refresh(this._entries);
    this._totalBalance.calculateBalance(this._entries);
  }

  removeEntry(timestamp) {
    let startIndex;
    for (let i = 0; i < this._entries.length; i++) {
      if (this._entries[i].timestamp() === parseInt(timestamp)) {
        startIndex = i;
        break;
      }
    }
      if(startIndex !== undefined) {
        this._entries.splice(startIndex, 1);
        this._monthListCollection.refresh(this._entries);
        this._totalBalance.calculateBalance(this._entries);
      }
  }

  start() {
    this._navigation.displayHTML();
    this._formular.displayHTML();
    this._monthListCollection.displayHTML();
    this._totalBalance.displayHTML();
  }

}
