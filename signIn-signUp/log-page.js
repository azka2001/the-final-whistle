document.addEventListener('DOMContentLoaded', function() {
    const logregBox = document.querySelector('.logreg-box');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
  
    registerLink.addEventListener('click', function(e) {
      logregBox.classList.add('active');
    });
  
    loginLink.addEventListener('click', function(e) {
      logregBox.classList.remove('active');
    });
  });
  