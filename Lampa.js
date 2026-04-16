export default class Lampa {
    constructor(index, szuloElem) {
        this.index = index;
        this.allapot = false;

        this.elem = document.createElement("div");
        this.elem.classList.add("lampa");

        szuloElem.appendChild(this.elem);

        this.elem.addEventListener("click", () => {
            const esemeny = new CustomEvent("lampakattintas", {
                detail: this.index
            });
            window.dispatchEvent(esemeny);
        });

        this.frissit();
    }

    kapcsol() {
        this.allapot = !this.allapot;
        this.frissit();
    }

    setAllapot(ertek) {
        this.allapot = ertek;
        this.frissit();
    }

    frissit() {
        this.elem.classList.remove("on", "off");
        if (this.allapot) {
            this.elem.classList.add("on");
        } else {
            this.elem.classList.add("off");
        }
    }
}