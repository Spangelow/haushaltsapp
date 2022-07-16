"use strict";

    // <nav id="navigationsleiste">
    //     <a href="index.html"><span id="markenname">ACCOUNT-BOOK</span></a>
    // </nav>
    
class Navigation {

    constructor() {
        this._html = this._generateHTML();
    }

    _generateHTML() {
        let nav = document.createElement("nav");
        nav.setAttribute("id", "navigationsleiste");

        let anchor = document.createElement("a");
        anchor.setAttribute("href", "#");
        nav.insertAdjacentElement("afterbegin", anchor);

        let headerTitle = document.createElement("span");
        headerTitle.setAttribute("id", "markenname");
        headerTitle.textContent = "ACCOUNTBOOK";
        anchor.insertAdjacentElement("afterbegin", headerTitle);

        return nav;
    }

    displayHTML() {
            let body = document.querySelector("body");
            if (body !== null) {
                body.insertAdjacentElement("afterbegin", this._html);
            }
    }

}