const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	if (username.value === '') {
		alert('Por favor ingresa tu nombre de usuario');
		username.focus();
		return false;
	}

	if (password.value === '') {
		alert('Por favor ingresa tu contraseña');
		password.focus();
		return false;
	}

	// Si se han pasado todas las validaciones, se puede enviar el formulario
	alert('LOGIN EXITOSO!!!');
});
