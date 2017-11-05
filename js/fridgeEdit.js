// Global fridge array
var fridge = [];

// Gets called when the document is ready.
$(document).ready(function() {

	// Retrieves the fridge and displays it.
	retrieveFridge();

	// Assigns functionality to the add button.
	$("#add").click(function() {

		console.log("Clicked!");

		var toAdd = prompt("Enter an item");
		console.log(toAdd);

		fridge.push([1, toAdd]);

		// Gets the html element with the id fridgeList.
		var fridgeList = $("#fridgeList");

		// Appends the new item to the list.
		var i = fridge.length - 1;
		fridgeList.append("<li id=fridgeItem" + i + "><button id='inc" + i + "'>+</button><button id='dec" + i + "'>-</button> 1 " + toAdd + "</li>");
		$("#inc" + i).click(incQty);
		$("#dec" + i).click(decQty);
	});

	// Assigns functionality to the save button.
	$("#save").click(function() {
		localStorage.setItem("fridge", JSON.stringify(fridge));
	});
});

// Helper function that retrieves the fridge from localStorage.
function retrieveFridge() {

	// Retrieves the fridge from localStorage.
	var localFridge = localStorage.getItem("fridge");

	// If there are items, parses the items retrieved.
	if (localFridge) {
		console.log("There are items!");
		fridge = JSON.parse(localFridge);
	}

	displayFridge();
}

// Helper function that displays the fridge by injecting html.
function displayFridge() {

	// Gets the html element with the id fridgeList.
	var fridgeList = $("#fridgeList");
	fridgeList.html("");

	// Populates the html element; maybe Handlebars.js might be helpful here?
	for (var i = 0; i < fridge.length; i++) {

		var qty = fridge[i][0];
		var item = fridge[i][1];

		fridgeList.append("<li id=fridgeItem" + i + "><button id='inc" + i + "'>+</button><button id='dec" + i + "'>-</button> " + qty + " " + item + "</li>");
		$("#inc" + i).click(incQty);
		$("#dec" + i).click(decQty);
	}	
}

// Event handler that decreases the quantity of an item.
function decQty() {
	console.log("Decreasing quantity");
	console.log(this);

	var id = this.getAttribute("id");
	var index = id.substr(3);
	var count = --fridge[index][0];

	// Removes the item from the list when the quantity is 0 or less.
	if (count <= 0) {
		fridge.splice(index, 1)
		console.log($(this).parent().remove());
	}

	displayFridge();
}

// Event handler that increases the quantity of an item.
function incQty() {
	console.log("Increasing quantity");
	console.log(this);

	var id = this.getAttribute("id");
	var index = id.substr(3);
	fridge[index][0]++;

	displayFridge();
}
