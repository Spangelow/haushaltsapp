"use strict";

class Error {

    constructor(errorText, errorList) {
        this._errorText = errorText;
        this._errorList = [errorList];
        this._html = this._generateHTML();
    }

    _generateHTML() {
        let errorBox = document.createElement("div");
        errorBox.setAttribute("class", "fehlerbox");

        let errorHeader = document.createElement("span");
        errorHeader.textContent = this._errorText;
        errorBox.insertAdjacentElement("afterbegin", errorHeader);

        let ul = document.createElement("ul");
        errorHeader.insertAdjacentElement("beforeend", ul);

        for (let i = 0; i < this._errorList.length; i++) {
            let li = document.createElement("li");
            li.textContent = this._errorList[i];
            ul.appendChild(li);
        }

        let errorFooter = document.createElement("span")
        errorFooter.textContent = "Please retry with a new entry!";
        errorBox.insertAdjacentElement("beforeend", errorFooter);
        errorBox.style.boxShadow = "2px 2px 4px 4px rgba(0,0,0,0.5)";

        return errorBox;
    }

    removeErrors() {
        let errorBox = document.querySelector(".fehlerbox");
        if (errorBox !== null) {
            errorBox.remove(); 
        }
    }

    displayHTML() {
        let errorBox = document.querySelector("#eingabeformular-container");
        if (errorBox !== null) {
            errorBox.insertAdjacentElement("afterbegin", this._html);
        }
    }


}