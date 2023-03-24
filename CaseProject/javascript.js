


   window.onload = function() {
  var popupForm = document.getElementById('popup-form');
  var mainContent = document.getElementById('main-content');
  var verifyButton = document.querySelector('#verification-form button[type="submit"]');
  var closeButton = document.getElementById('close-popup');

  // Display the popup form on page load
  popupForm.classList.add('show');

  // Hide the popup form and show the main content when the "Verify" button is clicked
  verifyButton.addEventListener('click', function(event) {
    event.preventDefault();
    popupForm.classList.remove('show');
    mainContent.classList.remove('hidden');
  });

  // Hide the popup form when the "Close" button is clicked
  closeButton.addEventListener('click', function() {
    popupForm.classList.remove('show');
  });
};

