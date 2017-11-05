var cart = [];

$(document).ready(function() {

	$("#add").click(function() {

		console.log("Clicked!");
		var toAdd = prompt("Enter an item");
		console.log(toAdd);

		localCart = localStorage.getItem("cart");

		// If there are items, parse the items retrieved
		if (localCart) {
			console.log("There are items!");
			cart = JSON.parse(localCart);
		}

		cart.push([1, toAdd]);

		// Get the html element with the id cartList
		var cartList = $("#cartList");
		cartList.append("<li id=cartItem" + (cart.length - 1) + ">" + "1 " + toAdd + "</li>");
	});

	$("#save").click(function() {
		localStorage.setItem("cart", JSON.stringify(cart));
	});
});