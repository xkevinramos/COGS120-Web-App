// Gets called when the document is ready.
$(document).ready(function() {
	$("#done").click(function() {
		cartToFridge();
	});
});

function cartToFridge() {

	var cart = [];
	var fridge = [];

	// Retrieves the cart from localStorage.
	var localCart = localStorage.getItem("cart");

	// If there are items, parses the items retrieved.
	if (localCart && localCart != "[]") {
		console.log("There are items in the cart!");
		cart = JSON.parse(localCart);

		console.log("Moving items from the cart to the fridge!")
		console.log(cart);

		// Retrieves the fridge from localStorage.
		var localFridge = localStorage.getItem("fridge");

		// If there are items, parses the items retrieved.
		if (localFridge && localFridge != "[]") {
			console.log("There are items in the fridge!");
			fridge = JSON.parse(localFridge);
		}	

		fridge = fridge.concat(cart);

		localStorage.setItem("cart", JSON.stringify([]));
		localStorage.setItem("fridge", JSON.stringify(fridge));
	}
	
	else {
		console.log("There are no items in the cart!");
	}
}