"use strict";

var Stack = require("../");

var BracketReversal = function(bracketStr){
	//Initialise Stack
	var stack = new Stack();
	var count = 0;
	var reversalsCount = 0;

	//Check if string has lenght or not
	if(!bracketStr.length) return console.log("Invalid string");

	//If first bracket is } than we have to reverse it and increment the reversalsCount.
	if(bracketStr[0] === "}") {
		bracketStr[0] = "{";
		reversalsCount++;
		stack.push("{");
		count++;
	}

	//Loop for the length of the string
	while(count < bracketStr.length){
		if(bracketStr[count] === "}") {
			//If we find closing bracket than will pop that bracket from stack.
			stack.pop();
		} else if(bracketStr[count] === "{"){
			//If we get an opening bracket than we will push that bracket to stack.
			stack.push("{");
		} else {
			//Other wise it will be an invalid input.
			console.log("invalid input");
			break;
		}

		count ++;
	}

	//If modulus of stack size is greater than 0, than the string cannot be corrected.
	if(stack.size() % 2 > 0){
		return "Cannot be corrected.";
	}

	//Return the reversals needed to balnace the string.
	return (stack.size() / 2) + reversalsCount;
};

module.exports = BracketReversal;
