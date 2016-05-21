"use strict";

//Class Initalization
var Stack = function(){
	this.top = -1;
	this.stack = [];
}

//IsEmpty - Return whether the stack is empty or not
Stack.prototype.isEmpty = function() {
	return (this.top < 0);
};

//Push - Pushes element to the stack
Stack.prototype.push = function(value) {
	this.stack[++this.top] = value;
};

//Pop - Pop an element from the stack
Stack.prototype.pop = function() {
	if(this.isEmpty()) return console.log("Stack is empty can not pop an item");
	var item = this.stack[this.top--];
	this.stack.pop();
	return item;
};

//Peek - Return the last inserted element from the stack
Stack.prototype.peek = function() {
	if(this.isEmpty()) return console.log("Stack is empty can not peek an item");
	return this.stack[this.top];
};

//Print - Prints out some of the details about the stack
Stack.prototype.print = function(){
	console.log("Top: " + this.top);
	console.log("isEmpty: " + this.isEmpty());
	console.log("Size: " + this.size());
	console.log("\nStack");
	console.log("-------------------------------------");
	for(var i = 0; i < this.stack.length; i++){
		console.log("Item " + i + " : " + this.stack[i]);
	}
};

//Size - returns the size of the stack
Stack.prototype.size = function(){
	return this.stack.length;
};

module.exports = Stack;