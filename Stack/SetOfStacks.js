"use strict";

/** This class will implement set of stacks **/

var Stack = require("./");


function addStack(){}

function removeStack(){}

function isThresholdReached(currentStack, threshold){
	//if(stackSize >= threshold) return true;
	return false;
}

var SetOfStacks = function(threshold){
	this.maxStackLimit = threshold || 10;
	this.currentStack = 0;
	
	//Initalizing the setOfStack with first stack
	this.setOfStack = [];
	this.setOfStack[this.currentStack] = new Stack();
};

SetOfStacks.prototype.push = function(value){
	//Adding item to current stack
	this.setOfStack[this.currentStack].push(value);

	//Check if current stack is full
	if(this.setOfStack[this.currentStack].size() >= this.maxStackLimit) {
		this.currentStack++;
		this.setOfStack[this.currentStack] = new Stack();
	}
};

SetOfStacks.prototype.pop = function(){
	// Check whether current stack is empty or not
	if(this.setOfStack[this.currentStack].isEmpty()){
		this.setOfStack.pop();
		this.currentStack--;
	}

	//Return poped item	
	return this.setOfStack[this.currentStack].pop();
	
};

SetOfStacks.prototype.print = function(){
	console.log(this.setOfStack);
};

module.exports = SetOfStacks;


(function(){
	var setOfStacks = new SetOfStacks(2);
	setOfStacks.push(10);
	setOfStacks.push(12);
	setOfStacks.push(14);
	setOfStacks.push(16);
	setOfStacks.push(18);
	setOfStacks.push(20);
	setOfStacks.push(22);
	console.log(setOfStacks.pop());
	console.log(setOfStacks.pop());
	console.log(setOfStacks.pop());
	setOfStacks.push(24);
	setOfStacks.push(26);
	setOfStacks.push(28);
	setOfStacks.push(29);
	setOfStacks.push(30);
	setOfStacks.push(32);
	setOfStacks.push(33);
	setOfStacks.push(34);
	setOfStacks.push(35);
        console.log(setOfStacks.pop());
        console.log(setOfStacks.pop());
        console.log(setOfStacks.pop());
	console.log(setOfStacks.pop());
	setOfStacks.print();
}());
