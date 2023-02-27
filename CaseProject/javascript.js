const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.dataset.target);
    function ValidateEmail(input) {

      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
      try {
      (input.value.match(validRegex)) 
    
        alert("Valid email address!");
    
        document.form1.text1.focus();

        window.alert("Thanks For Your Submission!");
    
   
    
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
