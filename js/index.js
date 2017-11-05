// Gets called when the document is ready.
$(document).ready(function() {

	// Assigns functionality to the log out button.
	$("#log-out").click(function() {
		console.log("Logging out!")
		localStorage.removeItem("loggedIn");
		window.location = "login.html"
	});

	// Assigns functionality to the localStorage.clear() button.
	$("#clr").click(function() {
		localStorage.clear();
	});
});