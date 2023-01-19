import "../styles/style.css";
import { stock } from "./stock";

const DOMSelectors = {
  buttonvg: document.querySelector(".btnvg"),
  buttonelec: document.querySelector(".btnelec"),
  buttonfig: document.querySelector(".btnfig"),
  storefront: document.querySelector(".main"),
  name: document.querySelector("name"),
  item: document.getElementById("text"),
};
document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("yel")) {
    document.body.classList.add("purp");
    document.body.classList.remove("yel");
  } else {
    document.body.classList.add("yel");
    document.body.classList.remove("purp");
  }
});
{
  stock.forEach((theArr) => {
    console.log(theArr);
  });
}
const chooseVideoGame = function () {
  stock
    .filter((theArr) => theArr.type === "Video Game")
    .forEach((stock) =>
      DOMSelectors.storefront.insertAdjacentHTML(
        "beforeend",
        `<div id="text"><p>${stock.name} ${stock.type}</p></div>`
      )
    );
};
const chooseElectronic = function () {
  stock
    .filter((theArr) => theArr.type === "Electronic")
    .forEach((stock) =>
      DOMSelectors.storefront.insertAdjacentHTML(
        "beforeend",
        `<div id="text"><p>${stock.name} ${stock.type}</p></div>`
      )
    );
};
const chooseFigure = function () {
  stock
    .filter((theArr) => theArr.type === "Figure")
    .forEach((stock) =>
      DOMSelectors.storefront.insertAdjacentHTML(
        "beforeend",
        `<div id="text"><p>${stock.name} ${stock.type}</p></div>`
      )
    );
};
DOMSelectors.buttonvg.addEventListener("click", function () {
  chooseVideoGame();
});
DOMSelectors.buttonelec.addEventListener("click", function () {
  chooseElectronic();
});
DOMSelectors.buttonfig.addEventListener("click", function () {
  chooseFigure();
});

const deleteItem = function () {
  DOMSelectors.text.innerHTML = "";
};
