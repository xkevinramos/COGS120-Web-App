$(document).ready(function () {
	"use strict";
	
	$(".buttonToList").hover(function() {
		var toListToNum = document.getElementsByClassName("buttonToList");
		var checkId = $(this);
		var getId = checkId.getElementById();
		for (var i = 0; i <= toListToNum.length; i++) {
			if (getId === "arrow" + i) {
				$(getId).toggleClass("toWhite");
			}
		}
	});
	
	$(".buttonToList").click(function () {
		$(".itemList").toggleClass("showList");
	});
});