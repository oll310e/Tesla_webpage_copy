export function changeScrollLocation(scrollLocation) {
  const textOver = document.querySelector(".Textover");
  let opacityValue = Math.abs(
    1 - 2 * ((scrollLocation / window.innerHeight) % 1)
  );
  textOver.style = `opacity:${opacityValue}`;
}

export function changeTextOver(scrollLocation) {
  const textModel = document.querySelector("#Textmodel");
  const textInfo = document.querySelector("#Textinfo");
  const textButtons = document.querySelector("#Textbuttons");
  const textFooterLink = document.querySelector("#TextFooterLink");

  if (scrollLocation <= 430) {
    textInfo.innerHTML =
      "Ränta från 1.99% för MODEL 3-beställningar med leverans senast 31 mars 2023. <a class='Textlink' id='TextHeaderLink'>Mer information</a>";
    textModel.innerText = "Model 3";
    textFooterLink.innerText = "Boka ett Virtuellt möte";
    textButtons.innerHTML =
      "<button class='TextButton'>upptäck lagerbilar</button>\n<button class='TextButton'>Anpassad beställning</button>";
  } else if (scrollLocation > 430 && scrollLocation <= 1290) {
    textInfo.innerHTML =
      "<a class='Textlink' id='TextHeaderLink'>Boka provkörning</a>";
    textModel.innerText = "Model Y";
    textFooterLink.innerText = "Euro NCAP säkerhetsklassning 5 stjärnor";
    textButtons.innerHTML =
      "<button class='TextButton'>upptäck lagerbilar</button>\n<button class='TextButton'>Anpassad beställning</button>";
  } else if (scrollLocation > 1290 && scrollLocation <= 2150) {
    textInfo.innerHTML = "";
    textModel.innerText = "Model S";
    textFooterLink.innerText = "";
    textButtons.innerHTML =
      "<button class='TextButton'>upptäck lagerbilar</button>\n<button class='TextButton'>Anpassad beställning</button>";
  } else if (scrollLocation > 2150 && scrollLocation <= 3010) {
    textInfo.innerHTML = "";
    textModel.innerText = "Model X";
    textFooterLink.innerText = "";
    textButtons.innerHTML =
      "<button class='TextButton'>upptäck lagerbilar</button>\n<button class='TextButton'>Anpassad beställning</button>";
  } else if (scrollLocation > 3010 && scrollLocation <= 3870) {
    textInfo.innerHTML = "Kraft till allt";
    textModel.innerText = "Solenergi och Powerwall";
    textFooterLink.innerText = "";
    textButtons.innerHTML = "<button class='TextButton'>Läs mer</button>";
  } else if (scrollLocation > 3870 && scrollLocation <= 4730) {
    textInfo.innerHTML = "Grön el";
    textModel.innerText = "Soltak";
    textFooterLink.innerText = "";
    textButtons.innerHTML =
      "<button class='TextButton'>Anpassad beställning</button>";
  } else if (scrollLocation > 4730 && scrollLocation <= 5160) {
    textInfo.innerHTML = "";
    textModel.innerText = "Tillbehör";
    textFooterLink.innerText = "Teslan 2023";
    textButtons.innerHTML = "<button class='TextButton'>Handla nu</button>";
  }
}
