const shopBtn = document.getElementById('shop');
const aboutBtn = document.getElementById('about');
const partnersBtn = document.getElementById('partners');

shopBtn.addEventListener('click', () => {
  window.location.href = shopBtn.dataset.link;
});

aboutBtn.addEventListener('click', () => {
  window.location.href = aboutBtn.dataset.link;
});

partnersBtn.addEventListener('click', () => {
  window.location.href = partnersBtn.dataset.link;
});

    function ValidateEmail(input) {

      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
      try {
     (input.value.match(validRegex) 
    
        
        
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
