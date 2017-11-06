// Gets called when the document is ready.
$(document).ready(function() {

	// Assigns functionality to the log in button.
	$("#log-in").click(function() {

		console.log("Retrieving user data");

		var user = prompt("Who are you?");

		// Returns if user cancelled.
		if (user == null) {
			return;
		}

		// Removes leading and trailing whitespaces.
		user = user.trim();

		// Returns if user did not enter any non-whitespace characters.
		if (user === "") {
			alert("Please enter something valid");
			return;
		}

		localStorage.setItem("user", user);

		// Retrieves user data.
		var localData = localStorage.getItem(user);

		var cart = [];
		var fridge = [];
		var family = {};

		if (localData) {
			var data = JSON.parse(localData);
			cart = data["cart"];
			fridge = data["fridge"];
			family = data["family"];
		}

		// Populates local storage with retrieved user data.
		localStorage.setItem("cart", JSON.stringify(cart));
		localStorage.setItem("fridge", JSON.stringify(fridge));
		localStorage.setItem("family", JSON.stringify(family));

		// Logs in and redirect.
		console.log("Logging in!")
		localStorage.setItem("loggedIn", 0);
		window.location = "index.html"
	});
});