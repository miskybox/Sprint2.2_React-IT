// Exercise 6
/*
window.onload = function() {
	// Recupera el carrito del sessionStorage
	var cart = JSON.parse(sessionStorage.getItem('cart'));

	open_modal(cart);
 };  */
 function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");

	// Validate fields entered by the user: name, phone, password, and email
	if (fName.value == "") {
		errorName.innerHTML = "Name field is required";
		error++;
	}
	if (fEmail.value == "") {
		errorEmail.innerHTML = "Email field is required";
		error++;
	}
	if (fAddress.value == "") {
		errorAddress.innerHTML = "Address field is required";
		error++;
	}
	if (fLastN.value == "") {
		errorLastN.innerHTML = "Last name field is required";
		error++;
	}
	if (fPassword.value == "") {
		errorPassword.innerHTML = "Password field is required";
		error++;
	}
	if (fPhone.value == "") {
		errorPhone.innerHTML = "Phone field is required";
		error++;
	}
	if (error > 0) {
		alert("Error");
		return false; // stop the form from submitting
	} else {
		alert("OK");
		return true;
	} // form is valid and can be submitted
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
	'use strict'

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	const forms = document.querySelectorAll('.needs-validation')

	// Loop over them and prevent submission
	Array.from(forms).forEach(form => {
		form.addEventListener('submit', event => {
			if (!form.checkValidity()) {
				event.preventDefault()
				event.stopPropagation()
			}

			form.classList.add('was-validated')
		}, false)
	})
})()