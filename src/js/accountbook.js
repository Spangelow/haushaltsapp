"use strict";

const accountBook = {

  totalBalance: new Map(),
  entries: [],

  addNewEntry(formularData) {
    let newEntry = new Map();
    newEntry.set("title", formularData.title);
    newEntry.set("type", formularData.type);
    newEntry.set("amount", formularData.amount);
    newEntry.set("date", formularData.date);
    newEntry.set("timestamp", Date.now());
    this.entries.push(newEntry);

    this.sortEntriesByDate();
    this.displayEntries();
    this.calculateBalance();
    this.displayBalance();
  },

  /*
Check ob eine ul bereits vorhanden ist --> ggf <ul> entfernen, da immer komplettes entry array erstellt wird --> Doppeltes anlegen vermeiden
<ul> erstellen
über entries[] iterieren
für jeden Eintrag einen HTML Eintrag erstellen (li) 
Und HTML Entry in <ul> einsetzen
<ul> in article monatsliste einsetzen */
  displayEntries() {
    document.querySelectorAll(".monatsliste ul").forEach(e => {
      e.remove();
    });
    let entrylist = document.createElement("ul");
    this.entries.forEach(e => {
      entrylist.insertAdjacentElement("beforeend", this.generateHTMLEntry(e));
    });
    document.querySelector(".monatsliste").insertAdjacentElement("afterbegin", entrylist);
  },

  generateHTMLEntry(entry) {
    let listelement = document.createElement("li");
    if (entry.get("type") === "einnahme") {
      listelement.setAttribute("class", "einnahme");
    } else if (entry.get("type") === "ausgabe") {
      listelement.setAttribute("class", "ausgabe");
    }
    listelement.setAttribute("data-timestamp", entry.get("timestamp"));

    let date = document.createElement("span");
    date.setAttribute("class", "datum");
    date.textContent = entry.get("date").toLocaleDateString("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
    listelement.insertAdjacentElement("afterbegin", date);

    let title = document.createElement("span");
    title.setAttribute("class", "titel");
    title.textContent = entry.get("title");
    date.insertAdjacentElement("afterend", title);

    let amount = document.createElement("span");
    amount.setAttribute("class", "betrag");
    amount.textContent = `${(entry.get("amount") / 100).toFixed(2).replace(/\./, ",")} €`; // template string notwendig, . -> , | cent -> Euro | € Zeichen | Anzeige 2 Nachkommastellen (toFixed(2))
    title.insertAdjacentElement("afterend", amount);

    let button = document.createElement("button");
    button.setAttribute("class", "entfernen-button");
    amount.insertAdjacentElement("afterend", button);

    let icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-trash");
    button.insertAdjacentElement("afterbegin", icon);

    this.addRemoveEntryEvent(listelement);

    return listelement;
  },


  // anhand der aktuellen balance --> Neue balance generieren 
  generateHTMLbalance() {
    let totalBalance = document.createElement("aside");
    totalBalance.setAttribute("id", "gesamtbilanz");

    let heading = document.createElement("h1");
    heading.textContent = "Total Balance";
    totalBalance.insertAdjacentElement("afterbegin", heading);

    // Einnahmen div
    let income = document.createElement("div");
    income.setAttribute("class", "gesamtbilanz-zeile einnahmen");
    let incomeSpan = document.createElement("span");
    incomeSpan.textContent = "Einnahmen:";
    income.insertAdjacentElement("afterbegin", incomeSpan);
    let incomeAmount = document.createElement("span");
    incomeAmount.textContent = `${(this.totalBalance.get("income") / 100).toFixed(2).replace(/\./, ",")} €`;
    income.insertAdjacentElement("beforeend", incomeAmount);
    totalBalance.insertAdjacentElement("beforeend", income);

    // Ausgaben div
    let expenses = document.createElement("div");
    expenses.setAttribute("class", "gesamtbilanz-zeile ausgaben");
    let expensesSpan = document.createElement("span");
    expensesSpan.textContent = "Ausgaben:";
    expenses.insertAdjacentElement("afterbegin", expensesSpan);
    let expensesAmount = document.createElement("span");
    expensesAmount.textContent = `${(this.totalBalance.get("expenses") / 100).toFixed(2).replace(/\./, ",")} €`;
    expenses.insertAdjacentElement("beforeend", expensesAmount);
    totalBalance.insertAdjacentElement("beforeend", expenses);

    // Bilanz div
    let balance = document.createElement("div");
    balance.setAttribute("class", "gesamtbilanz-zeile bilanz");
    let balanceSpan = document.createElement("span");
    balanceSpan.textContent = "Bilanz:";
    balance.insertAdjacentElement("afterbegin", balanceSpan);
    let balanceAmount = document.createElement("span");
    if (this.totalBalance.get("balance") >= 0) {
      balanceAmount.setAttribute("class", "positiv");
    } else if (this.totalBalance.get("balance") < 0) {
      balanceAmount.setAttribute("class", "negativ");
    }
    balanceAmount.textContent = `${(this.totalBalance.get("balance") / 100).toFixed(2).replace(/\./, ",")} €`;
    balance.insertAdjacentElement("beforeend", balanceAmount);
    totalBalance.insertAdjacentElement("beforeend", balance);

    return totalBalance;
  },

  addRemoveEntryEvent(entryListPoint) {
    entryListPoint.querySelector(".entfernen-button").addEventListener("click", e => {
      let timestamp = e.target.parentElement.getAttribute("data-timestamp");
      this.removeEntry(timestamp);
    });
  },

  removeEntry(timestamp) {
    let startIndex;
    for (let i = 0; i < this.entries.length; i++) {
      if (this.entries[i].get("timestamp") === parseInt(timestamp)) {
        startIndex = i;
        break;
      }
    }
      if(startIndex !== undefined) {
        this.entries.splice(startIndex, 1);
        this.sortEntriesByDate();
        this.displayEntries();
        this.calculateBalance();
        this.displayBalance();
      }



  },


  calculateBalance() {
    let newtotalBalance = new Map();
    newtotalBalance.set("income", 0);
    newtotalBalance.set("expenses", 0);
    newtotalBalance.set("balance", 0);

    this.entries.forEach((element) => {
      switch (element.get("type")) {
        case "einnahme":
          newtotalBalance.set("income", newtotalBalance.get("income") + element.get("amount"));
          // newtotalBalance.income += element.get("amount");
          break;
        case "ausgabe":
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

  // Check ob balance schon angezeigt wird --> Falls ja, entferne
  // Neue Balance anzeigen (generateHTMLbalance())
  displayBalance() {
    document.querySelectorAll("#gesamtbilanz").forEach(e => {
      e.remove();
    });
    document.querySelector("body").insertAdjacentElement("beforeend", this.generateHTMLbalance());
  },

  sortEntriesByDate() {
    this.entries = this.entries.sort((a, b) => {
      if (a.date > b.date) {
        // ziehe a weiter nach vorne
        return -1;
      } else if (a.date < b.date) {
        return 1;
      } else {
        return 0;
      }
    });
  }

};