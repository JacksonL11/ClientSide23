
const verificationForm = document.getElementById("verification-form");
const popupForm = document.getElementById("popup-form");

verificationForm.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from submitting

  // perform form validation here

  popupForm.style.display = "none"; // hide the popup form
});

// Initialize an empty array to store user selections
let userSelections = [];

// Add an event listener to the checkboxes
const checkboxes = document.querySelectorAll('input[type=checkbox]');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    // If the checkbox is checked, add the value to the array
    if (this.checked) {
      userSelections.push(this.value);
    } else { // If the checkbox is unchecked, remove the value from the array
      const index = userSelections.indexOf(this.value);
      if (index > -1) {
        userSelections.splice(index, 1);
      }
    }
  });
});

// Convert the array to a string
const selectionsString = userSelections.join(', '); // e.g. "18-20, 31-40, 51-60"
