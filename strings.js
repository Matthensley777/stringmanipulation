function reversal(s) {
	var reverseString = "";
	for (var i = s.length - 1; i >= 0; i--)
		reverseString += s[i];
	return reverseString;
	document.getElementById("question");
}
console.log(reversal("dont press the button"));

function alphabits(aOrder) {
	return aOrder.split("").sort().join("");
	document.getElementById("question");
}
console.log(alphabits("alphabits"));

function palindrome() {

}

// var button = getElementById("question");
// console.log("event", clickEvent);
var testString = "";
reversal(testString);
alphabits(testString);
palindrome(testString);

// document.getElementById("question").addEventListener("click", reversal);
// document.getElementById("question").addEventListener("click", alphabits);