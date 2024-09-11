import { shoppingCart } from "../../product items/shoppingCart.js";
import { saveCookie } from "./cookie.js";
export function cardMaker(cardInfo) {
  const newItem = document.createElement("div");
  newItem.className = "item-card";

  newItem.innerHTML = `<img src="${cardInfo.image}" alt="" />
<button class="add-to-cart addingBtn" name = ${cardInfo.reference}>
  <img
    src="../images-fox/shop/add item white.svg"
    alt="add item"
  />
  <span>Add</span>
</button>
<div class="item-info">
  <span>${cardInfo.name}</span>
  <span>$${cardInfo.price}</span>
  <img src="${cardInfo.rating}" alt="" />
  <span>${cardInfo.topic}</span>
</div>
`;

  const addingBtn = newItem.querySelector(".addingBtn");
  addingBtn.addEventListener("click", () => {
    let reference = addingBtn.name;
    if (!Object.keys(shoppingCart).includes(reference)) {
      shoppingCart[reference] = 1;
    } else {
      shoppingCart[reference] = Number(shoppingCart[reference]) + 1;
    }

    saveCookie();
  });

  return newItem;
}
