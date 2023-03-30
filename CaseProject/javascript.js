
const verificationForm = document.getElementById("verification-form");
const popupForm = document.getElementById("popup-form");

verificationForm.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from submitting

  // perform form validation here

  popupForm.style.display = "none"; // hide the popup form
});

// Initialize an array to store user selections and select all options
let userSelections = ['18-20', '21-30', '31-40', '41-50', '51-60', '60+'];
const select = document.getElementById('age-range');
Array.from(select.options).forEach(option => {
  option.selected = true;
});

// Add an event listener to the select element
select.addEventListener('change', function() {
  // Get the selected options and add them to the array
  const selectedOptions = Array.from(this.selectedOptions).map(option => option.value);
  userSelections = selectedOptions;
});

// Convert the array to a string
const selectionsString = userSelections.join(', '); // e.g. "18-20, 31-40, 51-60"
