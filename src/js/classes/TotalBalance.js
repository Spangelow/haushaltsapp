"use strict";

  /* HTML: 
  <aside id="gesamtbilanz">
    <h1>Gesamtbilanz</h1>
    <div class="gesamtbilanz-zeile einnahmen"><span>Einnahmen:</span><span>0,00 €</span></div>
    <div class="gesamtbilanz-zeile ausgaben"><span>Ausgaben:</span><span>0,00 €</span></div>
    <div class="gesamtbilanz-zeile bilanz"><span>Bilanz:</span><span class="positiv">0,00 €</span></div>
  </aside> 
  */

class TotalBalance {
  constructor() {
    this._income = 0;
    this._expenses = 0;
    this._totalBalance = 0;
    this._html = this._generateHTMLbalance();
  }

  _generateHTMLbalance() {
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
    incomeAmount.textContent = `${(this._income / 100)
      .toFixed(2)
      .replace(/\./, ",")} €`;
    income.insertAdjacentElement("beforeend", incomeAmount);
    totalBalance.insertAdjacentElement("beforeend", income);

    // Ausgaben div
    let expenses = document.createElement("div");
    expenses.setAttribute("class", "gesamtbilanz-zeile ausgaben");
    let expensesSpan = document.createElement("span");
    expensesSpan.textContent = "Ausgaben:";
    expenses.insertAdjacentElement("afterbegin", expensesSpan);
    let expensesAmount = document.createElement("span");
    expensesAmount.textContent = `${(this._expenses / 100)
      .toFixed(2)
      .replace(/\./, ",")} €`;
    expenses.insertAdjacentElement("beforeend", expensesAmount);
    totalBalance.insertAdjacentElement("beforeend", expenses);

    // Bilanz div
    let balance = document.createElement("div");
    balance.setAttribute("class", "gesamtbilanz-zeile bilanz");
    let balanceSpan = document.createElement("span");
    balanceSpan.textContent = "Bilanz:";
    balance.insertAdjacentElement("afterbegin", balanceSpan);
    let balanceAmount = document.createElement("span");
    this._totalBalance >= 0
      ? balanceAmount.setAttribute("class", "positiv")
      : balanceAmount.setAttribute("class", "negativ");
    balanceAmount.textContent = `${(this._totalBalance / 100)
      .toFixed(2)
      .replace(/\./, ",")} €`;
    balance.insertAdjacentElement("beforeend", balanceAmount);
    totalBalance.insertAdjacentElement("beforeend", balance);

    return totalBalance;
  }

  _resetBalance() {
    this._totalBalance = 0;
    this._expenses = 0;
    this._income = 0;
  }

  calculateBalance(entries) {
    this._resetBalance();
    entries.forEach((entry) => {
      switch (entry.type()) {
        case "einnahme":
          this._income += entry.amount();
          break;
        case "ausgabe":
          this._expenses += entry.amount();
          break;
        default:
          console.log(`Der Typ ${entry.type()} ist nicht bekannt!`);
          break;
      }
    });
    this._totalBalance = this._income - this._expenses;
    this._html = this._generateHTMLbalance();
    this.displayHTML();
  }

  displayHTML() {
    let totalBalance = document.querySelector("#gesamtbilanz");
    if (totalBalance !== null) {
      totalBalance.remove();
    }
    document
      .querySelector("body")
      .insertAdjacentElement("beforeend", this._html);
  }
}
