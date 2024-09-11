export function totalCost(itemList, shoppingCart) {
  let total = 0;
  for (let [savedReference, quantity] of Object.entries(shoppingCart)) {
    itemList.forEach((item) => {
      if (item.reference == savedReference) {
        let addition = item.price * quantity;
        total += addition;
      }
    });
  }

  return total;
}
