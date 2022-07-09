"use strict";

const accountBook = {

  totalBalance: new Map(),
  entries: [],
  errors: [],

  enterEntryData() {
    let newEntry = new Map();
    newEntry.set("title", this.convertTitle(prompt("Titel eingeben")));
    newEntry.set("type", this.convertType(prompt("Einnahme oder Ausgabe?")));
    newEntry.set("amount", this.convertAmount(prompt("Betrag eingeben (ohne € Zeichen)")));
    // newEntry.set("date", new Date(prompt("Datum (jjjj-mm-tt):").trim() + " 00:00:00"));
    newEntry.set("date", this.convertDate(prompt("Datum (jjjj-mm-tt):")));
    newEntry.set("timestamp", Date.now());
    if (this.errors.length === 0) {
      this.entries.push(newEntry);
    } else {
      console.log("Es gibt Fehler: ");
      this.errors.forEach(e => {
        console.log(e);
      });
    }
    this.calculateBalance();
  },

  convertTitle(title) {
    title = title.trim();
    if (this.validateTitle(title)) {
      return title;
    } else {
      this.errors.push("Es wurde kein Titel eingegeben");
      return false;
    }
  },

  validateTitle(title) {
    // ^ = begins with, \d+ = any amount digits, (,|.) = , or . ,
    // \d\d? = at least 1 digit 2nd digit optional, $ = line end 
    if (title !== "") {
      return true;
    } else {
      return false;
    }
  },

  convertType(type) {
    type = type.trim().toLowerCase();
    if (this.validateType(type)) {
      return type;
    } else {
      this.errors.push(type + " ist kein gültiger Typ!\nBitte einen gültigen Typ angeben.");
      return false;
    }
  },

  validateType(type) {
    // e = einnahme a = ausgabe
    if (type.match(/^(?:einnahme|ausgabe)$/) !== null) {
      return true;
    } else {
      return false;
    }
  },


  convertAmount(amount) {
    amount = amount.trim();
    if (this.validateAmount(amount)) {
      return parseFloat(amount.replace(",", ".")) * 100;
    } else {
      this.errors.push(amount + " ist kein gültiger Betrag.\nBitte eine gültige Zahl als Betrag eingeben!");
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
    date = date.trim();
    if (this.validateDate(date)) {
      return new Date(date + " 00:00:00");
    } else {
      this.errors.push(date + " ist kein gültiges Datum.\nBitte ein Datum in der Form JJJJ-MM-DD eingeben!")
      return false;
    }
  },

  validateDate(date) {
    // ^ = begins with, \d+ = any amount digits, (,|.) = , or . ,
    // \d\d? = at least 1 digit 2nd digit optional, $ = line end 
    if (date.match(/^\d{4}-\d{2}-\d{2}$/) !== null) {
      return true;
    } else {
      return false;
    }
  },

  //   <ul>
  //   <li class="ausgabe" data-timestamp="12839123912381">
  //       <span class="datum">03.02.2020</span>
  //       <span class="titel">Miete</span>
  //       <span class="betrag">545,00 €</span>
  //       <button class="entfernen-button"><i class="fas fa-trash"></i></button>
  //   </li>
  // </ul>
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
    amount.textContent = `${(entry.get("amount") / 100).toFixed(2).replace(/\./, ",")} €` ; // template string notwendig, . -> , | cent -> Euro | € Zeichen | Anzeige 2 Nachkommastellen (toFixed(2))
    title.insertAdjacentElement("afterend", amount);

    let button = document.createElement("button");
    button.setAttribute("class", "entfernen-button");
    amount.insertAdjacentElement("afterend", button);
    
    let icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-trash");
    button.insertAdjacentElement("afterbegin", icon);

    return listelement;
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
    for (let entry of this.entries) {
      entrylist.insertAdjacentElement("beforeend", this.generateHTMLEntry(entry));
    }
    document.querySelector(".monatsliste").insertAdjacentElement("afterbegin", entrylist);
  },

  // <!-- Gesamtbilanz -->
  // <aside id="gesamtbilanz">
  //     <h1>Gesamtbilanz</h1>
  //     <div class="gesamtbilanz-zeile einnahmen"><span>Einnahmen:</span><span>0,00€</span></div>
  //     <div class="gesamtbilanz-zeile ausgaben"><span>Ausgaben:</span><span>0,00€</span></div>
  //     <div class="gesamtbilanz-zeile bilanz"><span>Bilanz:</span><span class="positiv">0,00€</span></div>
  // </aside>

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

  // Check ob balance schon angezeigt wird --> Falls ja, entferne
  // Neue Balance anzeigen (generateHTMLbalance())
  displayBalance() {
    document.querySelectorAll("#gesamtbilanz").forEach(e => {
      e.remove();
    });
    document.querySelector("body").insertAdjacentElement("beforeend", this.generateHTMLbalance());
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
    console.log(this.entries);
  },

  addNewEntry() {
    let addAnotherEntry = true;
    while (addAnotherEntry) {
      this.enterEntryData();
      if (this.errors.length === 0) {
        this.sortEntriesByDate();
        this.displayEntries();
        this.calculateBalance();
        this.displayBalance();
      } else {
        this.errors = [];
      }
      addAnotherEntry = confirm("Einen weiteren Eintrag hinzufügen?");
    }
  },
};

accountBook.addNewEntry();