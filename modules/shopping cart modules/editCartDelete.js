import { shoppingCart } from "../../product items/shoppingCart.js";
export function editCartDelete(reference) {
  console.log("old ", shoppingCart);
  delete shoppingCart[reference];
  console.log("new ", shoppingCart);
}

// Thinking about making the whole shopping cart as an object and rewrite many functions as its methods to simplify data transfer
