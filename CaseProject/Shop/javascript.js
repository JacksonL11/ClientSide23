const items = document.querySelectorAll(".item");
const shoppingCart = [];
const shoppingCartElement = document.querySelector(".shopping-cart");

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

shoppingCartElement.addEventListener("click", () => {
  const cart = document.createElement("div");
  cart.classList.add("cart");
  document.body.appendChild(cart);
  
  const title = document.createElement("h2");
  title.textContent = "Shopping Cart";
  cart.appendChild(title);
  
  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.addEventListener("click", () => {
    cart.remove();
    shoppingCartOpen = false;
  });
  cart.appendChild(closeButton);
  
  const list = document.createElement("ul");
  cart.appendChild(list);
  
  for (const { name, price } of shoppingCart) {
    const item = document.createElement("li");
    item.textContent = `${name}: $${price}`;
    list.appendChild(item);
  }
  shoppingCartOpen = true;
}
});

function updateShoppingCart() {
  shoppingCartElement.textContent = `Shopping Cart (${shoppingCart.length})`;
}
