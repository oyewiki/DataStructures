"use strict";

var Stack = require("../");

var BracketReversal = function(bracketStr){
	var stack = new Stack();
	var count = 0;
	var initReversal = 0;

	if(!bracketStr.length) return console.log("Invalid string");

	if(bracketStr[0] === "}") {
		bracketStr[0] = "{";
		reversalsCount++;
		stack.push("{");
		count++;
	}

	while(count < bracketStr.length){
		
		if(bracketStr[count] === "}") {
			stack.pop();
		} else if(bracketStr[count] === "{"){
			stack.push("{");
		} else {
			console.log("invalid input");
			break;
		}

		count ++;
	}

	if(stack.size() % 2 > 0){
		return "Cannot be corrected.";
	}

	return stack.size() / 2;
};

module.exports = BracketReversal;