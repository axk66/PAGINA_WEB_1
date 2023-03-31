// Validación del formulario
(function() {
    'use strict';
    window.addEventListener('load', function() {
      var form = document.getElementById('contact-form');
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
      form.addEventListener('input', function(event) {
        if (event.target.validity.valid) {
          event.target.classList.remove('is-invalid');
        } else {
          event.target.classList.add('is-invalid');
        }
      }, false);
    }, false);
  })();
  



  