export function hideMobileMenu() {
  const thePage = document.getElementById("toblur");
  const mobileMenu = document.querySelector(".mobile-nav-hidden");
  mobileMenu.classList.toggle("hidden");
  thePage.classList.toggle("blur");
}
