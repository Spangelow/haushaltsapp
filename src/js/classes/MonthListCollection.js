"use strict";

class MonthListCollection {

  /* HTML: 
   <section id="monatslisten">
       <!-- Monatslisten -->
   </section>*/


  constructor() {
    this._monthListCollection = [];
    this._html = this._generateHTML();
  }

  _addEntry(newEntry) {
    let entryYear = newEntry.date().getFullYear();
    // let entryYear = newEntry.date().toLocaleString("de-DE", {year: "numeric"});
    let entryMonth = newEntry.date().getMonth();
    // let entryMonth = newEntry.date().toLocaleString("de-DE", {month: "numeric"});
    let monthListExists = false;
    this._monthListCollection.forEach(monthList => {
      if (entryYear === monthList.year() && entryMonth === monthList.month()) {
        monthList.addEntry(newEntry);
        monthListExists = true;
      }
    });
    if (!monthListExists) {
      this._addMonthList(entryYear, entryMonth, newEntry);
    }
  }

  _addMonthList(year, month, entry) {
    let newMonthList = new MonthList(year, month);
    newMonthList.addEntry(entry);
    this._monthListCollection.push(newMonthList);
  }

  sortMonthlistsByDate() {
    this._monthListCollection.sort((monthlistA, monthlistB) => {
      if (monthlistA.year() > monthlistB.year()) {
        return -1;
      } else if (monthlistA.year() < monthlistB.year()) {
        return 1;
      } else {
        if (monthlistA.month() < monthlistB.month()) {
          return 1;
        } else {
          return -1;
        } // Hier: else if und else für return -1 und 0 sparen, weil nur noch 1 Fall übrig ist, da jede Monatsliste unique ist
      }
    });
  }

  _generateHTML() {
    let monthlistCollectionContainer = document.createElement("section");
    monthlistCollectionContainer.setAttribute("id", "monatslisten");

    this._monthListCollection.forEach(monthList => {
      monthlistCollectionContainer.insertAdjacentElement("beforeend", monthList.html());
    })

    return monthlistCollectionContainer;
  }

  refresh(entries) {
    this._monthListCollection = [];
    entries.forEach(entry => this._addEntry(entry));
    this.sortMonthlistsByDate();
    this._html = this._generateHTML();
    this.displayHTML();
  }

  displayHTML() {

    let body = document.querySelector("#eingabeformular-container");
    let monthListCollection = document.querySelector("#monatslisten");
    if (body !== null) {
      if (monthListCollection !== null) {
        monthListCollection.remove();
      }
      body.insertAdjacentElement("afterend", this._html);
    }
  }
}