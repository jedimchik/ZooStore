export function blurPage() {
  const thePage = document.getElementById("toblur");
  const shopBag = document.querySelector(".shopping-cart");
  shopBag.classList.toggle("hidden");
  thePage.classList.toggle("blur");
}
