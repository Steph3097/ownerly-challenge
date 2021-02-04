window.addEventListener('DOMContentLoaded', () => {
  const emailCaptureForm = document.getElementById('email-capture-form');

  const validateEmail = function(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

  emailCaptureForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const emailInput = event.target.querySelector('input');
    const isValid = validateEmail(emailInput.value);

    if (!isValid) {
      event.target.classList.add('error');
    } else {
      window.location.href = './pages/loading.html'
    }

  })
});

