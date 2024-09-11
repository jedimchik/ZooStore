import { shoppingCart } from "../../product items/shoppingCart.js";
export function saveCookie() {
  document.cookie =
    JSON.stringify(shoppingCart) +
    ";" +
    "expires=Tue, 31 Dec 2024 00:00:00 UTC; path=/;";
}
