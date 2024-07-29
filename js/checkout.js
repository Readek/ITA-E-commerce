// Exercise 6

const fName = document.getElementById("fName");
const fLastName = document.getElementById("fLastN");
const fEmail = document.getElementById("fEmail");
const fPass = document.getElementById("fPassword");
const fAddr = document.getElementById("fAddress");
const fPhone = document.getElementById("fPhone");

// theres no difference between regex and dark magic
const textRegex = new RegExp('^[A-Za-z]{3,15}$');
const emailRegex = new RegExp('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+');
const passRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$')
const easyRegex = new RegExp('^(?=.*[A-Za-z]).{3,}$');
const phoneRegex = new RegExp('^[0-9]{3,}$')

document.getElementById("checkoutBtn").addEventListener("click", (e) => {validate(e)})
/**
 * Validates all checkout inputs
 * @param {Event} e 
 */
function validate(e) {

	// page will relod otherwise
    e.preventDefault();

	let error = 0;

	// Validate fields entered by the user: name, phone, password, and email
	if (!regxValidate(fName, textRegex)) error++;
	if (!regxValidate(fLastName, textRegex)) error++;
	if (!regxValidate(fEmail, emailRegex)) error++;
	if (!regxValidate(fPass, passRegex)) error++;
	if (!regxValidate(fAddr, easyRegex)) error++;
	if (!regxValidate(fPhone, phoneRegex)) error++;
	 
	if(error == 0){
		alert("Everything is ok!")
	}

}

/**
 * Validates a text input
 * @param {HTMLElement} el - Text input to be validated
 * @param {RegExp} regexp - Regular expresion to be used
 * @returns {Boolean}
 */
function regxValidate(el, regexp) {

	if(!regexp.test(el.value)){

		el.classList.add("is-invalid");
		return;

	}

	el.classList.remove("is-invalid");
	return true;
	
}
