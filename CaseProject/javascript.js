

const form = document.getElementById('verification-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const ageCheckbox = document.getElementById('age-checkbox');
  const firstNameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');
  const dobInput = document.getElementById('dob');
  const licenseNumInput = document.getElementById('licenseNum');
  const stateInput = document.getElementById('state');
  const hasInsuranceSelect = document.getElementById('hasInsurance');

  if (!ageCheckbox.checked) {
    alert('You must be older than 18 to continue.');
    return;
  }

  if (!firstNameInput.checkValidity()) {
    alert('Please enter a valid first name.');
    return;
  }

  if (!lastNameInput.checkValidity()) {
    alert('Please enter a valid last name.');
    return;
  }

  if (!dobInput.checkValidity()) {
    alert('Please enter a valid date of birth (MM/DD/YYYY).');
    return;
  }

  if (!licenseNumInput.checkValidity()) {
    alert('Please enter a valid driver\'s license number (8 characters).');
    return;
  }

  if (!stateInput.checkValidity()) {
    alert('Please enter a valid state abbreviation (2 characters).');
    return;
  }

  // Form is valid, so you can submit the form and access the rest of the website here
});

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


    verificationForm.addEventListener('submit', (event) => {
      event.preventDefault();
      popup.style.display = 'none';
    });

    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
      if (event.target === popup) {
        popup.style.display = 'none';
      }
    });
