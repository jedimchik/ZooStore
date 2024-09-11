import { editCartDelete } from "./editCartDelete.js";
import { updateCart } from "./updateCart.js";

export function smallCardMaker(item, quantity) {
  const addedCard = document.createElement("div");
  addedCard.className = "added-item";

  addedCard.innerHTML = `
            <div class="what-added">
              <img src="${item.image}" alt="" />
              <div class="what-added-info">
                <span>${item.name}</span>
                <span>$${item.price}.00</span>
              </div>
            </div>
            <div class="order-settings">
              <div class="quantity">
                <button class="minus">-</button>
                <span>${quantity}</span>
                <button class="plus">+</button>  
              </div>
              <div class="remove">
                <span>Remove</span>
                <button class="remove"></button>
              </div>
            </div>`;

  addedCard.addEventListener("click", (card) => {
    if (card.target.className == "remove") {
      console.log("delete this item, reference", item.reference);
      editCartDelete(item.reference);
    } else if (card.target.className == "minus") {
      console.log("minus one");
    } else if (card.target.className == "plus") {
      console.log("add one item");
    }
  });
  return addedCard;
}
