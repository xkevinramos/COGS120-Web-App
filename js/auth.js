console.log("Authenticating!");

if (!localStorage.getItem("loggedIn")) {
	window.location = "login.html"
	console.log("Not logged in!");
}

else {
	console.log("Logged in!");
}