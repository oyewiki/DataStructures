"use strict";

var Stack = require("../Stack");
var stack;

describe("#Stack Functions", function(){
	before("Initialise",function(){
		stack = new Stack();
		stack.push(10);
		stack.push(21);
		stack.push(19);
	});

	it("#Stack General operations", function(){
		console.log("Poped Item: " + stack.pop() + "\n");
		console.log("Peeked Item: " + stack.peek() + "\n");
		stack.push(17);
		stack.push(11);
		stack.push(13);
		stack.print();
	});

});