
const verificationForm = document.getElementById("verification-form");
const popupForm = document.getElementById("popup-form");

verificationForm.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from submitting

  // perform form validation here

  popupForm.style.display = "none"; // hide the popup form
});

// Initialize an empty object to store user selections
let userSelections = {};

// Define the options
const options = ['18-20', '21-30', '31-40', '41-50', '51-60', '60+'];

// Get a reference to the select element
const selectElement = document.querySelector('#age-range');

// Create an option element for each option and add it to the select element
options.forEach(option => {
  const optionElement = document.createElement('option');
  optionElement.value = option;
  optionElement.text = option;
  selectElement.add(optionElement);
});

// Add an event listener to the select element
selectElement.addEventListener('change', function() {
  // Remove all previous selections from the userSelections object
  userSelections = {};

  // Get the selected option from the select element
  const selectedOption = this.options[this.selectedIndex].value;

  // Add the selected option to the userSelections object
  userSelections[selectedOption] = true;
});
