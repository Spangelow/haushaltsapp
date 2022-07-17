"use strict";

/* HTML:
<article class="monatsliste">
  Titel
  <h2>
    <span class="monat-jahr"></span>
    <span class="monatsbilanz negativ"></span>
  </h2>
<!-- Eintrags-Liste -->
  <!-- <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul> -->
</article>  */

class MonthList {
  constructor(year, month) {
    this._year= year;
    this._month = month;
    this._entries = [];
    this._balance = 0;
    this._html = this._generateHTML();
  }

  year() { return this._year; }
  month() { return this._month; }
  html() { return this._html }

  _sortEntriesByDate() {
    this._entries = this._entries.sort((entryA, entryB) => {
      if (entryA.date() > entryB.date()) {
        return -1;
      } else if (entryA.date() < entryB.date()) {
        return 1;
      } else {
        if (entryA.timestamp() > entryB.timestamp()) {
          return -1;
        } else {
          return 1;
        }
      }
    });
  }

  _calculateBalance() {
    this._balance = 0;
    this._entries.forEach(entry => {
      entry.type() === "einnahme" ? this._balance += entry.amount() : this._balance -= entry.amount();
    });
  }

 addEntry(newEntry) {
    this._entries.push(newEntry);
    this._refresh();
 }

  _generateHTML() {
    let monthlistArticle = document.createElement("article");
    monthlistArticle.setAttribute("class", "monatsliste");

    let heading = document.createElement("h2");

    let monthYear = document.createElement("span");
    monthYear.setAttribute("class", "monat-jahr");
    monthYear.textContent = `${new Date(this._year, this._month).toLocaleDateString("de-DE", {
      month: "long",
      year: "numeric"
    })}`;
    heading.insertAdjacentElement("afterbegin", monthYear);

    let monthBalance = document.createElement("span");
    this._balance < 0 ? monthBalance.setAttribute("class", "monatsbilanz negativ") : monthBalance.setAttribute("class", "monatsbilanz positiv");
    monthBalance.textContent = `${(this._balance / 100).toFixed(2).replace("\.", ",")} €`;

    heading.insertAdjacentElement("beforeend", monthBalance);
    monthlistArticle.insertAdjacentElement("afterbegin", heading);

    let entryList = document.createElement("ul");

    this._entries.forEach(entry => entryList.insertAdjacentElement("beforeend", entry.html()));
    monthlistArticle.insertAdjacentElement("beforeend", entryList);

    return monthlistArticle;
  }

  _refresh() {
    this._sortEntriesByDate();
    this._calculateBalance();
    this._html = this._generateHTML();
  }

  displayHTML() {
    document.querySelectorAll(".monatsliste ul").forEach(e => {
      e.remove();
    });
    let body = document.querySelector("#monatslisten");
    if (body !== null) {
      body.insertAdjacentElement("beforeend", this._html);
    }
  }
}
