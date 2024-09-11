import { smallCardMaker } from "./smallCardMaker.js";
import { totalCost } from "./totalCost.js";

export function updateCart(thebag, shoppingCart, itemList, totalCostHolder) {
  thebag.innerHTML = "";
  for (let [savedReference, quantity] of Object.entries(shoppingCart)) {
    itemList.forEach((item) => {
      if (item.reference == savedReference) {
        thebag.appendChild(smallCardMaker(item, quantity));
      }
    });
  }

  // updating the total cost of added items
  totalCostHolder.textContent = "$" + totalCost(itemList, shoppingCart) + ".00";
}
