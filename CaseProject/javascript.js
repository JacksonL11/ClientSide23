
const verificationForm = document.getElementById("verification-form");
const popupForm = document.getElementById("popup-form");

verificationForm.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from submitting

  // perform form validation here

  popupForm.style.display = "none"; // hide the popup form
});

const closePopupButton = document.getElementById("close-popup");
closePopupButton.addEventListener("click", function() {
  popupForm.style.display = "none"; // hide the popup form when the close button is clicked
});
