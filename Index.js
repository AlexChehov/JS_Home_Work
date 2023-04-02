const emailField = document.querySelector("#email");
const passwordField = document.querySelector("#password");
const submitBtn = document.querySelector("#submit");

const userEmailoutput = document.querySelector("#user-email");
const userPasswordOutput = document.querySelector("#user-password");

let user = localStorage.getItem("user")
? JSON.parse(localStorage.getItem("user")) : undefined;

if (user) {
	const {email,password} = user;
	userEmailoutput.textContent = email;
	userPasswordOutput.textContent = password;
}

submitBtn.onclick = () => {
	const email = emailField.value;
	const password = passwordField.value;

	user = { email, password };

	userEmailoutput.textContent = email;
	userPasswordOutput.textContent = password;

	emailField.value = "";
	password.value = "";

	localStorage.setItem("user",JSON.stringify(user));
}

logoutButton.onclick = () => {
	user = undefined;
	localStorage.setItem("user","");
	userEmailoutput.textContent = "";
	userPasswordOutput.textContent = "";
}