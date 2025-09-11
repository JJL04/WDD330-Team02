// Get cart data from local storage
let cart = JSON.parse(localStorage.getItem("so-cart")) || [];

// Select the footer and total element
const cartFooter = document.querySelector(".cart-footer");
const cartTotalElement = document.querySelector(".cart-total");

if (cart.length > 0) {
  // Show the footer
  cartFooter.classList.remove("hide");

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.FinalPrice, 0);

  // Update the total text
  cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
} else {
  // Hide footer if cart empty
  cartFooter.classList.add("hide");
}
