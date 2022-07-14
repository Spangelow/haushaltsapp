"use strict";

class Kinderkonto extends Konto {

    constructor(iban, inhaber, einzahlung, limit) {
        super(iban, inhaber, einzahlung);
        this.limit = limit;
    }

    _saldoPruefen(auszahlung) {
        return this.saldo - auszahlung < this.limit ? false : true;
    }

    abheben(auszahlung) {
        this._saldoPruefen(auszahlung) ? super.abheben(auszahlung) : console.log(`Konto darf nicht unter ${this.limit} € Limit gehen!`);
    }

}