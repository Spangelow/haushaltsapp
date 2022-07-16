"use strict";

class MonthListCollection {

//     <section id="monatslisten">

//     <!-- Monatsliste -->
// </section>


constructor() {
    this._html = this._generateHTML();
  }

  _generateHTML() {
    let monthlistCollection = document.createElement("section");
    monthlistCollection.setAttribute("id", "monatslisten");
    return monthlistCollection;
  }

  displayHTML() {
    let body = document.querySelector("eingabeformular-container");
    if (body !== null) {
      body.insertAdjacentElement("afterend", this._html);
    }
  }
}