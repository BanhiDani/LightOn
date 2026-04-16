import JatekTer from "./JatekTer.js";

const jatek = new JatekTer(3);

document.getElementById("ujJatek").addEventListener("click", () => {
    jatek.ujJatek();
});