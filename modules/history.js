import { blurPage } from ".//blurPage.js";
import { itemList } from "../product items/itemList.js";
import { shoppingCart } from "../product items/shoppingCart.js";
import { mappingShoppingCart } from "./shopping cart modules/mappingShoppingCart.js";
import { ShoppingCartSection } from "./ShoppingCartSection.js";
import { hideMobileMenu } from "./showMobileMenu.js";

// mapping shopping cart
const body = document.querySelector("body");
body.appendChild(
  mappingShoppingCart(itemList, shoppingCart, "", document.cookie)
);

const openCart = document.getElementById("open-cart");
const closeCart = document.getElementById("close-cart");
const openMenu = document.getElementById("mobile-nav-open");
const closeMenu = document.getElementById("close-mobile-nav");

openCart.addEventListener("click", () => blurPage());
closeCart.addEventListener("click", () => blurPage());
openMenu.addEventListener("click", () => hideMobileMenu());
closeMenu.addEventListener("click", () => hideMobileMenu());

// adding items to the shopping cart
// updating the total cost of the bag
openCart.addEventListener("click", () => {
  const theBag = document.querySelector(".bag");
  let shoppingCartObj = new ShoppingCartSection(itemList, shoppingCart, theBag);
  shoppingCartObj.updateCart();
});
