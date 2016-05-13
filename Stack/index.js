"use strict";

var Stack = function(){
	this.top = -1;
	this.stack = [];
}


Stack.prototype.isEmpty = function() {
	return (this.top < 0);
};

Stack.prototype.push = function(value) {
	this.stack[++this.top] = value;
};

Stack.prototype.pop = function() {
	if(this.isEmpty()) return console.log("Stack is empty can not pop an item");
	var item = this.stack[this.top--];
	this.stack.pop();
	return item;
};

Stack.prototype.peek = function() {
	if(this.isEmpty()) return console.log("Stack is empty can not peek an item");
	return this.stack[this.top];
};

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

Stack.prototype.size = function(){
	return this.stack.length;
};

module.exports = Stack;