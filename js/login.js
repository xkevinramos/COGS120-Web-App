// Gets called when the document is ready.
$(document).ready(function() {

	// Assigns functionality to the log in button.
	$("#log-in").click(function() {
		console.log("Logging in!")
		localStorage.setItem("loggedIn", 0);
		window.location = "index.html"
	});
});