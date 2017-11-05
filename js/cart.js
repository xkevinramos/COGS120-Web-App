// Generate dummy list
function genCart() {

	var items = [];

	for (var i = 0; i < 10; i++) {
		items.push([i, "Cart Item " + i]);
	}

	return items;
}

$(document).ready(function() {

	// Retrieve the cart from localStorage
	var cart = localStorage.getItem("cart");

	// If there are items, parse the items retrieved
	if (cart) {
		console.log("There are items!");
		cart = JSON.parse(cart);
	}

	// Otherwise, fill localStorage with the dummy list
	else {
		console.log("There are no items!");
		var items = genCart();
		localStorage.setItem("cart", JSON.stringify(items));
		cart = items;
	}

	// Get the html element with the id cartList
	var cartList = $("#cartList");

	// Populate the html element; maybe Handlebars.js might be helpful here?
	for (var i = 0; i < cart.length; i++) {

		var qty = cart[i][0];
		var item = cart[i][1];

		cartList.append("<li id=cartItem" + i + ">" + qty + "\t" + item + "</li>");
	}
});