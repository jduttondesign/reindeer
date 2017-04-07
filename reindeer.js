var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var Element = document.getElementById("coloredReindeer");


	for (var i = 0; i < reindeer.length; i++) {
 		var hooves = reindeer[i] + " " + colors[i];
		document.getElementById("coloredReindeer").innerHTML += hooves + '<br>';
 } 