function generate() {
	// Define possible characters
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

	// Define password length
	const length = 12;

	// Initialize password variable
	let password = "";

	// Generate random password
	for (let i = 0; i < length; i++) {
		password += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	// Display password
	document.getElementById("password").value = password;
}
