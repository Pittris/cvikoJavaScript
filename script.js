"use strict";
function payment() {
  let celkovaCena = 0;

  // Ziskani destinace a ceny
  const destinaceSelect = document.getElementById("destinace");
  const destinaceOption =
    destinaceSelect.options[destinaceSelect.selectedIndex].value;

  let cena;

  switch (destinaceOption) {
    case "500":
      cena = 500;
      break;
    case "3000":
      cena = 3000;
      break;
    case "15000":
      cena = 15000;
      break;
    case "30000":
      cena = 30000;
      break;
    default:
      cena = 500; // Výchozí hodnota, pokud by nastala neočekávaná situace
      break;
  }
  celkovaCena = celkovaCena + cena;

  // Ziskani poctu letenek
  const pocetLetenekSelect = document.getElementById("pocetL");
  const selectedOption =
    pocetLetenekSelect.options[pocetLetenekSelect.selectedIndex].value;

  let pocetLetenek;

  switch (selectedOption) {
    case "letenek1":
      pocetLetenek = 1;
      break;
    case "letenek2":
      pocetLetenek = 2;
      break;
    case "letenek3":
      pocetLetenek = 3;
      break;
    case "letenek4":
      pocetLetenek = 4;
      break;
    case "letenek5":
      pocetLetenek = 5;
      break;
    case "letenek6":
      pocetLetenek = 6;
      break;
    case "letenek7":
      pocetLetenek = 7;
      break;
    case "letenek8":
      pocetLetenek = 8;
      break;
    case "letenek9":
      pocetLetenek = 9;
      break;
    case "letenek10":
      pocetLetenek = 10;
      break;
    default:
      pocetLetenek = 1; // Výchozí hodnota, pokud by nastala neočekávaná situace
      break;
  }
  celkovaCena *= pocetLetenek;

  // ziskani hodnoty z radia
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  let zvyseni = 0;

  radioButtons.forEach((radio) => {
    if (radio.checked) {
      switch (radio.id) {
        case "business":
          zvyseni = celkovaCena * 0.25;
          break;
        case "royal":
          zvyseni = celkovaCena * 0.5;
          break;
        default:
          zvyseni = 0;
          break;
      }
    }
  });

  // konecna cena vcetne navyseni
  celkovaCena += zvyseni;

  if (document.getElementById("zpatecni").checked) {
    celkovaCena *= 2;
  }
  const vyslCenaElement = document.getElementById("vyCena");
  vyslCenaElement.value = celkovaCena + " Kč";
}
// Kontrola maximální ceny
function control() {
  const maxCena = parseInt(document.querySelector("#maxCena").value, 10);

  const celkCena = parseInt(document.querySelector("#vyCena").value, 10);

  if (maxCena < celkCena) {
    alert("Cena překračuje maximální cenu, letenky nelze nakoupit");
  } else if (maxCena >= celkCena) {
    alert("Cena je v pořádku, můžete nakoupit");
  } else {
    alert("Musíte zadat maximální cenu");
  }
}

document.querySelector(".area").addEventListener("input", function () {
  this.value = this.value.replace(/[^a-zA-Z0-9 .,!?]/g, "");
});
