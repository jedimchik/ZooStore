export function mappingShoppingCart() {
  const shoppingCart = document.createElement("div");
  shoppingCart.classList = "shopping-cart hidden";

  shoppingCart.innerHTML = `
  <div class="your-bag">
    <button class="close-cart" id="close-cart"></button>
    <span>box</span>
    <h1>Your Bag</h1>
    <div class="bag"></div>
  </div>
  <div class="shopping-cart-summary">
    <h3>Total:</h3>
    <span id="totalCostHolder">$190.80</span>
    <button>Checkout</button>
  </div>`;

  return shoppingCart;
}
