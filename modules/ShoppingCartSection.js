import { saveCookie } from "./shop modules/cookie.js";

export class ShoppingCartSection {
  constructor(itemList, shoppingCart, theBag = "", cookie = "{}") {
    this.itemList = itemList;
    this.shoppingCart = shoppingCart;
    this.theBag = theBag;
    this.cookie = cookie;
  }

  mapShoppingCart() {
    const shoppingCartDiv = document.createElement("div");
    shoppingCartDiv.classList = "shopping-cart hidden";

    shoppingCartDiv.innerHTML = `
      <div class="your-bag">
        <button class="close-cart" id="close-cart"></button>
        <span>box</span>
        <h1>Your Bag</h1>
        <div class="bag"></div>
      </div>
      <div class="shopping-cart-summary">
        <h3>Total:</h3>
        <span id="totalCostHolder">$490.80</span>
        <button>Checkout</button>
      </div>`;

    return shoppingCartDiv;
  }

  totalCost() {
    let total = 0;
    for (let [savedReference, quantity] of Object.entries(this.shoppingCart)) {
      this.itemList.forEach((item) => {
        if (item.reference == savedReference) {
          let addition = item.price * quantity;
          total += addition;
        }
      });
    }

    return total;
  }

  getTheBag() {
    return document.querySelector(".bag");
  }

  getTheTotalHolder() {
    return document.getElementById("totalCostHolder");
  }

  smallCardMaker(item, quantity) {
    const addedCard = document.createElement("div");
    addedCard.className = "added-item";
    addedCard.name = item.reference;

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
        this.bagEditRemove(item.reference);
        this.updateCart();
      } else if (card.target.className == "minus") {
        this.bagEditLess(item.reference);
        this.updateCart();
      } else if (card.target.className == "plus") {
        this.bagEditMore(item.reference);
        this.updateCart();
      }
    });
    return addedCard;
  }

  bagEditRemove(reference) {
    delete this.shoppingCart[reference];
    saveCookie();
  }

  bagEditMore(reference) {
    this.shoppingCart[reference] = this.shoppingCart[reference] + 1;
    saveCookie();
  }

  bagEditLess(reference) {
    if (this.shoppingCart[reference] == 1) {
      this.bagEditRemove(reference);
    } else {
      this.shoppingCart[reference] = this.shoppingCart[reference] - 1;
    }
    saveCookie();
  }

  updateCart() {
    let theBag = this.getTheBag();

    theBag.innerHTML = "";
    for (let [savedReference, quantity] of Object.entries(this.shoppingCart)) {
      this.itemList.forEach((item) => {
        if (item.reference == savedReference) {
          theBag.appendChild(this.smallCardMaker(item, quantity));
        }
      });
    }

    let totalHolder = this.getTheTotalHolder();
    totalHolder.textContent = "$" + this.totalCost() + ".00";
  }

  updateCartCookie() {
    const existingCookies = Object.entries(JSON.parse(this.cookie));
    console.log(existingCookies);
    this.shoppingCart = existingCookies;
  }
}
