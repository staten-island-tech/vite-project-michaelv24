import "../styles/style.css";
import { stock } from "./stock";

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("yel")) {
    document.body.classList.add("purp");
    document.body.classList.remove("yel");
  } else {
    document.body.classList.add("yel");
    document.body.classList.remove("purp");
  }
});

function addStock(name, type, company) {
  stock.forEach((stock) => {
    document.querySelector();
  });
  //   const display = document.createElement("div");
  //   display.insertAdjacentHTML("afterbegin", `<p> ${name}</p>`);
  //   display.insertAdjacentHTML("afterbegin", `<p> ${type}</p>`);
  //   display.insertAdjacentHTML("beforeend", `<p> ${company} </p>`);
  // }
  console.log(stock);
}
{
  stock.forEach((theArr) => {
    console.log(theArr);
  });
}
const chooseItem = stock.filter((theArr) => stock.type === "");
console.log(chooseItem);
