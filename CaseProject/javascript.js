
const verificationForm = document.getElementById("verification-form");
const popupForm = document.getElementById("popup-form");

verificationForm.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from submitting

  // perform form validation here

  popupForm.style.display = "none"; // hide the popup form
});

// Initialize an empty array to store user selections
let userSelections = [];


const checkboxes = document.querySelectorAll('input[type=checkbox]');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
   
    if (this.checked) {
      userSelections.push(this.value);
    } else { 
      const index = userSelections.indexOf(this.value);
      if (index > -1) {
        userSelections.splice(index, 1);
      }
    }
  });
});

const options = ['18-20', '21-30', '31-40', '41-50', '51-60', '60+'];


const selectionsString = userSelections.join(', '); // e.g. "18-20, 31-40, 51-60"
