window.onload = function() {
  var popup = document.getElementById("popup-form");
  var close = document.getElementById("close-popup");
  var mainContent = document.getElementById("main-content");

  popup.style.display = "flex";

  close.onclick = function() {
    // Validate form data here
    if (validateFormData()) {
      popup.style.display = "none";
      mainContent.classList.remove("hidden");
    }
  }

  function validateFormData() {
    // Validation code here
    // Return true if form data is valid, false otherwise
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
