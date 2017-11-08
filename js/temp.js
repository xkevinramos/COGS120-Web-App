var user = "";

$(document).ready( function() {
	$("#log-in").click(function() {

		var status = validate();
		if (!status) {
			return;
		}

		// What I had before

	});
});

function validate() {
	// { "username" : "password"};

	var userdb = {};

	var temp = localStorage.getItem("userdb");

	if (userdb) {
		var userdb = JSON.parse(temp);
	}

	user = document.getElementById("user").value;
	user = user.trim();
	// Check if user === ""

	if (user in userdb) {

		if (password === userdb[username]) {
			return true;
		}

		else {
			alert("Incorrect password!");
			return false;
		}
	}

	else {
		alert("User doesn't exist! Creating new user with password!");
		userdb[username] = password;

		localStorage.setItem("userdb", JSON.stringify(userdb));

		return true;
	}
}