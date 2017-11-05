// Dummy list
var items = ["Cart Item 1", "Cart Item 2", "Cart Item 3"];

$(document).ready(function() {

	// Retrieve the cart from localStorage
	var cart = localStorage.getItem("cart");

	// If there are items, parse the items retrieved
	if (cart) {
		console.log("There are items!");
		cart = JSON.parse(cart);
	}

	// Otherwise, fillLocal storage with the dummy list
	else {
		console.log("There are no items!");
		localStorage.setItem("cart", JSON.stringify(items));
		cart = items;
	}

	// Get the html element with the id cartList
	var cartList = $("#cartList");

	// Populate the html element; maybe Handlebars.js might be helpful here?
	for (var i = 0; i < cart.length; i++) {
		cartList.append("<li id=item" + i + ">" + cart[i] + "</li>");
	}
});