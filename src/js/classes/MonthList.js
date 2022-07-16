"use strict";

/* <article class="monatsliste">
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
  constructor() {
    this._html = this._generateHTML();
  }

  _generateHTML() {
    let monthlist = document.createElement("article");
    monthlist.textContent = "Titel";
    monthlist.setAttribute("class", "monatsliste");
    let h2 = document.createElement("h2");
    let span = document.createElement("span");
    span.setAttribute("class", "monat-jahr");
    h2.insertAdjacentElement("afterbegin", span);
    span.className.replace("monat-jahr", "monatsbilanz negativ");
    h2.insertAdjacentElement("beforeend", span);
    let test = document.createElement("span");
    test.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fill-opacity="1" d="M0,32L20,74.7C40,117,80,203,120,224C160,245,200,203,240,208C280,213,320,267,360,245.3C400,224,440,128,480,117.3C520,107,560,181,600,229.3C640,277,680,299,720,261.3C760,224,800,128,840,90.7C880,53,920,75,960,85.3C1000,96,1040,96,1080,117.3C1120,139,1160,181,1200,192C1240,203,1280,181,1320,154.7C1360,128,1400,96,1420,80L1440,64L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
    `;
    monthlist.insertAdjacentElement("beforeend", test);
    return monthlist;
  }

  /* <article class="monatsliste">
Titel

<!-- Eintrags-Liste -->
<!-- <ul>
    <li></li>
    <li></li>
    <li></li>
</ul> -->

</article>  */

  displayHTML() {
    let body = document.querySelector("#monatslisten");
    if (body !== null) {
      body.insertAdjacentElement("beforeend", this._html);
    }
  }
}
