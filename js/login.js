// Gets called when the document is ready.
$(document).ready(function() {

	// Assigns functionality to the log in button.
	$("#log-in").click(function() {

		console.log("Retrieving user data");

		var user = prompt("Who are you?");

		if (user != null && user != "") {

			localStorage.setItem("user", user);

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

			localStorage.setItem("cart", JSON.stringify(cart));
			localStorage.setItem("fridge", JSON.stringify(fridge));
			localStorage.setItem("family", JSON.stringify(family));

			console.log("Logging in!")
			localStorage.setItem("loggedIn", 0);
			window.location = "index.html"
		}
		else if ( user != null) {
			alert("Please enter something valid");
		}
	});
});