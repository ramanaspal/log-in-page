document.getElementById('toggle-password').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('toggle-password');
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.innerHTML = '&#128586;'; // Change icon to closed-eye when password is visible
    } else {
      passwordInput.type = 'password';
      eyeIcon.innerHTML = '&#128065;'; // Change icon back to open-eye
    }
  });
  