import { itemList } from "../product items/itemList.js";
import { shoppingCart } from "../product items/shoppingCart.js";
import { blurPage } from ".//blurPage.js";
import { cardMaker } from "./shop modules/cardMaker.js";
import { filtersValues } from "./shop modules/filters.js";
import { filtersDisplay } from "./shop modules/filtersDisplay.js";
import { ShoppingCartSection } from "./ShoppingCartSection.js";
import { hideMobileMenu } from "./showMobileMenu.js";

// mapping shopping cart
const body = document.querySelector("body");
let shoppingCartObj = new ShoppingCartSection(
  itemList,
  shoppingCart,
  "",
  document.cookie
);
body.appendChild(shoppingCartObj.mapShoppingCart());

const openCart = document.getElementById("open-cart");
const closeCart = document.getElementById("close-cart");
const itemHolder = document.getElementById("items-holder");
const showAllFoxes = document.getElementById("showAllFoxes");
const filters = document.getElementById("filters");
const openMenu = document.getElementById("mobile-nav-open");
const closeMenu = document.getElementById("close-mobile-nav");

// blur page and open shopping bag
openCart.addEventListener("click", () => blurPage());
closeCart.addEventListener("click", () => blurPage());
openMenu.addEventListener("click", () => hideMobileMenu());
closeMenu.addEventListener("click", () => hideMobileMenu());

// displaying all items by default
itemHolder.innerHTML = "";
itemList.forEach((itemObj) => {
  itemHolder.appendChild(cardMaker(itemObj));
});

// drop all filters and show all items
showAllFoxes.addEventListener("click", () => {
  itemHolder.innerHTML = "";
  itemList.forEach((itemObj) => {
    itemHolder.appendChild(cardMaker(itemObj));
  });

  const searchField = document.getElementById("searchField");
  const topicAll = document.getElementById("all");
  const priceSlider = document.getElementById("priceSlider");
  const activefilters = document.querySelectorAll(".filter-display");
  const priceValue = document.getElementById("priceValue");

  searchField.value = "";
  topicAll.checked = true;
  priceSlider.value = 500;
  priceValue.textContent = 500;
  activefilters.forEach((child) => {
    child.style.display = "none";
  });
});

// applying filters
filters.addEventListener("change", () => {
  itemHolder.innerHTML = "";
  itemList.forEach((itemObj) => {
    if (
      itemObj.price <= filtersValues().priceFilter &&
      itemObj.name.toLocaleLowerCase().includes(filtersValues().searchFilter)
    ) {
      if (
        filtersValues().topicFilter != "all" &&
        itemObj.topic.toLocaleLowerCase() == filtersValues().topicFilter
      ) {
        itemHolder.appendChild(cardMaker(itemObj));
      } else if (filtersValues().topicFilter == "all") {
        itemHolder.appendChild(cardMaker(itemObj));
      }
    }
  });
  if (itemHolder.innerHTML == "") {
    itemHolder.innerHTML = "No results that match your filters";
  }
  filtersDisplay(filtersValues());
});
filters.addEventListener("keyup", () => {
  itemHolder.innerHTML = "";
  itemList.forEach((itemObj) => {
    if (
      itemObj.price <= filtersValues().priceFilter &&
      itemObj.name.toLocaleLowerCase().includes(filtersValues().searchFilter)
    ) {
      if (
        filtersValues().topicFilter != "all" &&
        itemObj.topic.toLocaleLowerCase() == filtersValues().topicFilter
      ) {
        itemHolder.appendChild(cardMaker(itemObj));
      } else if (filtersValues().topicFilter == "all") {
        itemHolder.appendChild(cardMaker(itemObj));
      }
    }
  });
  if (itemHolder.innerHTML == "") {
    itemHolder.innerHTML = "No results that match your filters";
  }
  filtersDisplay(filtersValues());
});

// adding items to the shopping cart
// updating the total cost of the bag
openCart.addEventListener("click", () => {
  const theBag = document.querySelector(".bag");
  let shoppingCartObj = new ShoppingCartSection(itemList, shoppingCart, theBag);
  shoppingCartObj.updateCart();
});
