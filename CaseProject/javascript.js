

// Get form element
const form = document.querySelector('form');

// Add submit event listener to form
form.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get form input elements
  const firstNameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');
  const dobInput = document.getElementById('dob');
  const licenseNumInput = document.getElementById('licenseNum');
  const stateInput = document.getElementById('state');

  // Get form input values
  const firstNameValue = firstNameInput.value.trim();
  const lastNameValue = lastNameInput.value.trim();
  const dobValue = dobInput.value.trim();
  const licenseNumValue = licenseNumInput.value.trim();
  const stateValue = stateInput.value.trim();

  // Validate input values
  if (!isValidName(firstNameValue)) {
    firstNameInput.classList.add('invalid');
  } else {
    firstNameInput.classList.remove('invalid');
  }

  if (!isValidName(lastNameValue)) {
    lastNameInput.classList.add('invalid');
  } else {
    lastNameInput.classList.remove('invalid');
  }

  if (!isValidDate(dobValue)) {
    dobInput.classList.add('invalid');
  } else {
    dobInput.classList.remove('invalid');
  }

  if (!isValidLicenseNum(licenseNumValue)) {
    licenseNumInput.classList.add('invalid');
  } else {
    licenseNumInput.classList.remove('invalid');
  }

  if (!isValidState(stateValue)) {
    stateInput.classList.add('invalid');
  } else {
    stateInput.classList.remove('invalid');
  }

  // If all input values are valid, submit form
  if (isValidName(firstNameValue) &&
      isValidName(lastNameValue) &&
      isValidDate(dobValue) &&
      isValidLicenseNum(licenseNumValue) &&
      isValidState(stateValue)) {
    form.submit();
  }
});

// Validation functions
function isValidName(name) {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(name);
}

function isValidDate(date) {
  const regex = /^(0[1-9]|1[0-2])\/([0-2][1-9]|3[0-1])\/\d{4}$/;
  return regex.test(date);
}

function isValidLicenseNum(licenseNum) {
  const regex = /^[A-Za-z0-9]{8}$/;
  return regex.test(licenseNum);
}

function isValidState(state) {
  const regex = /^[A-Za-z]{2}$/;
  return regex.test(state);
}

}


const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
tabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.dataset.target);
    function ValidateEmail(input) {
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      try {
      (input.value.match(validRegex)) 
   



        window.alert("Thanks For Your Submission!");
    
        document.form1.text1.focus();
     
    
   
    
      } 
      catch(err) {
    
        alert("Invalid email address!");
    
        document.form1.text1.focus();
    
 
    
      }
    
    }
    if (btn.hasAttribute('data-link')) {
      window.location.href = btn.dataset.link;
    } else {
      tabBtns.forEach((b) => b.classList.remove('active'));
      tabContents.forEach((c) => c.classList.remove('active'));
  
      btn.classList.add('active');
      target.classList.add('active');
    }
  });
});
