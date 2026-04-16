import Lampa from "./Lampa.js";

export default class JatekTer {
    constructor(meret) {
        this.meret = meret;
        this.lampak = [];
        this.szuloElem = document.getElementById("jatekter");

        this.ujJatek();

        window.addEventListener("lampakattintas", (e) => {
            this.kezeles(e.detail);
        });
    }

    ujJatek() {
        this.szuloElem.innerHTML = "";
        this.lampak = [];

        for (let i = 0; i < this.meret * this.meret; i++) {
            let lampa = new Lampa(i, this.szuloElem);

            if (Math.random() < 0.2) {
                lampa.setAllapot(true);
            }

            this.lampak.push(lampa);
        }

        this.szamlaloFrissit();
        document.getElementById("uzenet").innerText = "";
    }

    kezeles(index) {
        let szomszedok = this.szomszedok(index);

        
        szomszedok.push(index);

        szomszedok.forEach(i => {
            this.lampak[i].kapcsol();
        });

        this.szamlaloFrissit();
        this.ellenoriz();
    }

    szomszedok(index) {
        let lista = [];

        let sor = Math.floor(index / this.meret);
        let oszlop = index % this.meret;

        if (sor > 0) lista.push(index - this.meret);
        if (sor < this.meret - 1) lista.push(index + this.meret);
        if (oszlop > 0) lista.push(index - 1);
        if (oszlop < this.meret - 1) lista.push(index + 1);

        return lista;
    }

    szamlaloFrissit() {
        let db = 0;

        this.lampak.forEach(l => {
            if (!l.allapot) db++;
        });

        document.getElementById("szamlalo").innerText = db;
    }

    ellenoriz() {
        let mindenOff = this.lampak.every(l => !l.allapot);

        if (mindenOff) {
            document.getElementById("uzenet").innerText =
                "Hurrá, meghosszabítottad a Föld életét!";
        }
    }
}