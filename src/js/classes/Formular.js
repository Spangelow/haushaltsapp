"use strict";

class Formular {

    constructor() {
        this._html = this._generateHTML();
    }

    _fetchFormularData(event) {
        return {
            title: event.target.elements.titel.value,
            income: event.target.elements.einnahme.checked,
            amount: event.target.elements.betrag.value,
            date: event.target.elements.datum.valueAsDate
        };
    }

    _processFormularData(formularData) {
        return {
            title: formularData.title.trim(),
            type: formularData.income === false ? "ausgabe" : "einnahme",
            amount: parseInt((formularData.amount * 100), 10), // parseFloat("3123.56") würde auch gehen
            date: formularData.date
        };
    }

    _validateFormularData(formularData) {
        let errors = [];
        if (formularData.title === "") {
            errors.push("Title");
        }
        if (isNaN(formularData.amount) || formularData.amount < 0) {
            errors.push("Amount");
        }
        if (formularData.date === null) {
            errors.push("Date");
        }

        return errors;
    }

    _setCurrentDate() {
        let dateInput = document.querySelector("#datum");
        if (dateInput !== null) {
            dateInput.valueAsDate = new Date();
        }
    }

    _addSubmitEvent(formular) {
        formular.querySelector("#eingabeformular").addEventListener("submit", e => {
            e.preventDefault();
            // Formulardaten einsammeln & Formulardaten verarbeiten
            let formularData = this._processFormularData(this._fetchFormularData(e));
            let formularErrors = this._validateFormularData(formularData);
            let error = new Error(formularErrors, "The following entries you made are invalid: ");
            if (formularErrors.length === 0) {
                accountBook.addNewEntry(formularData);
                e.target.reset();
                this._setCurrentDate();
                error.removeErrors();                
            } else {
                error.displayHTML();
                e.target.reset();
                this._setCurrentDate();
            }
        });
    }

    _generateHTML() {
        let formular = document.createElement("section");
        formular.setAttribute("id", "eingabeformular-container");
        formular.innerHTML = `<form id="eingabeformular" action="#" method="get"></form>
        <div class="eingabeformular-zeile">
            <h1>Neue Einnahme / Ausgabe hinzufügen</h1>
        </div>
        <div class="eingabeformular-zeile">
            <div class="titel-typ-eingabe-gruppe">
                <label for="titel">Titel</label>
                <input type="text" id="titel" form="eingabeformular" name="titel" placeholder="z.B. Einkaufen" size="10" title="Titel des Eintrags" required>
                <input type="radio" id="einnahme" name="typ" value="einnahme" form="eingabeformular" title="Typ des Eintrags">
                <label for="einnahme" title="Typ des Eintrags">Einnahme</label>
                <input type="radio" id="ausgabe" name="typ" value="ausgabe" form="eingabeformular" title="Typ des Eintrags" checked>
                <label for="ausgabe" title="Typ des Eintrags">Ausgabe</label>
            </div>
        </div>
        <div class="eingabeformular-zeile">
            <div class="betrag-datum-eingabe-gruppe">
                <label for="betrag">Betrag</label>
                <input type="number" id="betrag" name="betrag" form="eingabeformular" placeholder="z.B. 10,42" size="10" step="0.01" title="Betrag des Eintrags (max. zwei Nachkommastellen, kein €-Zeichen)" required>
                <label for="datum">Datum</label>
                <input type="date" id="datum" name="datum" form="eingabeformular" placeholder="jjjj-mm-tt" size="10" title="Datum des Eintrags (Format: jjjj-mm-tt)" required>
            </div>
        </div>
        <div class="eingabeformular-zeile">
            <button class="standard" type="submit" form="eingabeformular">Hinzufügen</button>
        </div>`;

        this._addSubmitEvent(formular);
        return formular;
    }

    display() { 
        let nav = document.querySelector("#navigationsleiste");
        if (nav !== null) {
            nav.insertAdjacentElement("afterend", this._html);
            this._setCurrentDate();
        }
    }

}