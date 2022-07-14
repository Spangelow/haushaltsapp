"use strict";

class Konto {

    // _variable --> private
    constructor(iban, inhaber, einzahlung) {
        this._iban = iban;
        this._inhaber = [inhaber];
        this._saldo = einzahlung;
        this._aktiv = true;
    }

    einzahlen(einzahlung) {
        this._saldo += einzahlung;
    }

    abheben(auszahlung) {
        if(this._validiereAbheben(auszahlung)) {
            this._saldo -= auszahlung;
        }
    }

    kontostandAbfragen() {
        return this._saldo;
    }

    _validiereAbheben(auszahlung) {
        return this._saldo - auszahlung >= 0 ? true : false;
    }
}