const items = document.querySelectorAll(".item");
const shoppingCart = [];

for (let item of items) {
  const addToCartButton = item.querySelector(".add-to-cart");
  addToCartButton.addEventListener("click", () => {
    const name = item.querySelector("h2").textContent;
    const priceString = item.querySelector("p").textContent;
    const price = parseInt(priceString.replace(/[^0-9]/g, ""));
    shoppingCart.push({ name, price });
    updateShoppingCart();
  });
}

function updateShoppingCart() {
  const shoppingCartElement = document.querySelector(".shopping-cart");
  shoppingCartElement.textContent = `Shopping Cart (${shoppingCart.length})`;
}
