"use strict";
var toListToNum = document.getElementsByClassName("buttonToList");
	for (var i = 0; i < toListToNum.length; i++) {
    	toListToNum[i].onclick = function(){
		var list = this.nextElementSibling;
			if (list.style.display === "none") {
				list.style.display = "block";
			} else {
				list.style.display = "none";
			}
		};
	}