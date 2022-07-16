"use strict";

class AccountBook {
    "use strict";

    constructor() {
        this._entries = [];
        this._monthListCollection = new MonthListCollection();
        this._totalBalance = new TotalBalance();   
    }

  addNewEntry(formularData) {
    let newEntry = new Entry(formularData.title, formularData.type, formularData.amount, formularData.date);
    this._entries.push(newEntry);
    this._sortEntriesByDate();
    this._displayEntries();
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
        this._sortEntriesByDate();
        this._displayEntries();
        this._totalBalance.calculateBalance(this._entries);
      }
  }

  _sortEntriesByDate() {
    this._entries = this._entries.sort((a, b) => {
      return a.date() > b.date() ? -1 : a.date() < b.date() ? 1 : 0;
    });
  }

  _displayEntries() {
    document.querySelectorAll(".monatsliste ul").forEach(e => {
      e.remove();
    });
    let entrylist = document.createElement("ul");
    this._entries.forEach(e => {
      entrylist.insertAdjacentElement("beforeend", e.html());
    });
    document.querySelector(".monatsliste").insertAdjacentElement("afterbegin", entrylist);
  }

}
