window.onload = function() {
  var popup = document.getElementById("popup-form");
  var form = document.getElementById("verification-form");
  var close = document.getElementById("close-popup");
  
  popup.style.display = "flex";
  
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form from submitting
    popup.style.display = "none";
    // process form data here
  });
  
  close.onclick = function() {
    popup.style.display = "none";
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
