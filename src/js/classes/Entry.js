"use strict";

class Entry {
    constructor(title, type, amount, date) {
        this._title = title;
        this._type = type;
        this._amount = amount;
        this._date = date;
        this._timestamp = Date.now();
        this._html = this._generateHTMLEntry();
    }

    title() { return this._title; }
    type() { return this._type; }
    amount() { return this._amount; }
    date() { return this._date; }
    timestamp() { return this._timestamp; }
    html() { return this._html; }

    _generateHTMLEntry() {
        let listelement = document.createElement("li");
        this._type === "einnahme" ? listelement.setAttribute("class", "einnahme") : listelement.setAttribute("class", "ausgabe");
    
        listelement.setAttribute("data-timestamp", this._timestamp);
    
        let date = document.createElement("span");
        date.setAttribute("class", "datum");
        date.textContent = this._date.toLocaleDateString("de-DE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        });
        listelement.insertAdjacentElement("afterbegin", date);
    
        let title = document.createElement("span");
        title.setAttribute("class", "titel");
        title.textContent = this._title;
        date.insertAdjacentElement("afterend", title);
    
        let amount = document.createElement("span");
        amount.setAttribute("class", "betrag");
        amount.textContent = `${(this._amount/ 100).toFixed(2).replace(/\./, ",")} €`; // template string notwendig, . -> , | cent -> Euro | € Zeichen | Anzeige 2 Nachkommastellen (toFixed(2))
        title.insertAdjacentElement("afterend", amount);
    
        let button = document.createElement("button");
        button.setAttribute("class", "entfernen-button");
        amount.insertAdjacentElement("afterend", button);
    
        let icon = document.createElement("i");
        icon.setAttribute("class", "fas fa-trash");
        button.insertAdjacentElement("afterbegin", icon);
    
        this._addRemoveEntryEvent(listelement);
    
        return listelement;
      }

      _addRemoveEntryEvent(entryListPoint) {
        entryListPoint.querySelector(".entfernen-button").addEventListener("click", e => {
          let timestamp = e.target.parentElement.getAttribute("data-timestamp");
          accountBook.removeEntry(timestamp);
        });
      }

}