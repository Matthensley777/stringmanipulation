var reverseString = "";
var question = "";



function reversal() {
	var question = document.getElementById("question").value;
	for (var i = question.length - 1; i >= 0; i--)
		reverseString += question[i];
	document.getElementById("answer").innerHTML = "<h1>" + reverseString + "</h1>";
	
}
console.log("reverseString", reverseString)
function alphabits() {
	var question = document.getElementById("question").value;
	var alphabitize = question.split("").sort().join("");
	document.getElementById("answer").innerHTML += "<h1>" + alphabitize + "</h1>";
}


function palindrome() {
	var question = document.getElementById("question").value;
	if (question === reverseString) {
		document.getElementById("answer").innerHTML += "<h1> Your string is a palindrome </h1>";
	}
}


document.getElementById("change").addEventListener("click", input)

function input() {

reversal();
alphabits();
palindrome();
}


















