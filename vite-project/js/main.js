import "../styles/style.css";
import { stock } from "./stock";

const DOMSelectors = {
  buttonvg: document.querySelector(".btnvg"),
  buttonelec: document.querySelector(".btnelec"),
  buttonfig: document.querySelector(".btnfig"),
  button: document.querySelector(".btn"),
  storefront: document.querySelector(".main"),
  name: document.querySelector(".name"),
  item: document.querySelector(".text"),
  display: document.querySelector(".items"),
};
DOMSelectors.button.addEventListener("click", function () {
  if (document.body.classList.contains("yel")) {
    document.body.classList.add("purp");
    document.body.classList.remove("yel");
  } else {
    document.body.classList.add("yel");
    document.body.classList.remove("purp");
  }
});

const chooseVideoGame = function () {
  stock
    .filter((theArr) => theArr.type === "Video Game")
    .forEach((stock) =>
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div class="text"><img class="img" src=${stock.image}><img><p>${stock.name} </p> <p>${stock.type}</p>  </div>`
      )
    );
};
const chooseElectronic = function () {
  stock
    .filter((theArr) => theArr.type === "Electronic")
    .forEach((stock) =>
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div class="text"><img class="img" src=${stock.image}><img><p>${stock.name} </p><p>${stock.type}</p></div>`
      )
    );
};
const chooseFigure = function () {
  stock
    .filter((theArr) => theArr.type === "Figure")
    .forEach((stock) =>
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div class="text"><img class="img" src=${stock.image}><img><p>${stock.name} ${stock.type}</p></div>`
      )
    );
};
DOMSelectors.buttonvg.addEventListener("click", function () {
  console.log(DOMSelectors.display);
  deleteItem();
  chooseVideoGame();
});
DOMSelectors.buttonelec.addEventListener("click", function () {
  deleteItem();
  chooseElectronic();
});
DOMSelectors.buttonfig.addEventListener("click", function () {
  deleteItem();
  chooseFigure();
});

const deleteItem = function () {
  DOMSelectors.display.innerHTML = "";
};
chooseVideoGame();
