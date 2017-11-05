// Dummy list
var items = ["Fridge Item 1", "Fridge Item 2", "Fridge Item 3"];

$(document).ready(function() {

	// Retrieve the fridge from localStorage
	var fridge = localStorage.getItem("fridge");

	// If there are items, parse the items retrieved
	if (fridge) {
		console.log("There are items!");
		fridge = JSON.parse(fridge);
	}

	// Otherwise, fillLocal storage with the dummy list
	else {
		console.log("There are no items!");
		localStorage.setItem("fridge", JSON.stringify(items));
		fridge = items;
	}

	// Get the html element with the id fridgeList
	var fridgeList = $("#fridgeList");

	// Populate the html element; maybe Handlebars.js might be helpful here?
	for (var i = 0; i < fridge.length; i++) {
		fridgeList.append("<li id=item" + i + ">" + fridge[i] + "</li>");
	}
});
