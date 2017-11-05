// Generate dummy list
function genFridge() {

	var items = [];

	for (var i = 0; i < 10; i++) {
		items.push([i, "Fridge Item " + i]);
	}

	return items;
}

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
		var items = genFridge();
		localStorage.setItem("fridge", JSON.stringify(items));
		fridge = items;
	}

	// Get the html element with the id fridgeList
	var fridgeList = $("#fridgeList");

	// Populate the html element; maybe Handlebars.js might be helpful here?
	for (var i = 0; i < fridge.length; i++) {

		var qty = fridge[i][0];
		var item = fridge[i][1];

		fridgeList.append("<li id=fridgeItem" + i + ">" + qty + " " + item + "</li>");
	}
});
