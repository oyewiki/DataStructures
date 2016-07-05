"use strict";

/** This class will implement set of stacks **/
var Stack = require("./");

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

SetOfStacks.prototype.popAt = function(index){
	// First we will pop an element from the the stack present at the input index
	// Than from that index we will run a loop from stacks index + 1 to currentStack.
	//	In this we will pop an item from each stack and push that element to previous stack
	
	if(index === null || index === undefined){
		console.log("Invalid index");
		return;
	}
	
	if(index > this.currentStack){
		console.log("Invalid index, SetOfStack dont have enough items in it.");
		return;
	}
	
	var item = this.setOfStack[index].pop();
	var poppedItem;
	
	// In this we still have to write code for filling the setOFStacks
	//  and to push all elements ahead of this to one place back
	//for(var i= index; i < this.currentStack; i++){
	//	poppedItem = this.setOfStack[i+1].pop();
	//	this.setOfStack[i].push(poppedItem);
	//}

	return item;
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
	console.log(setOfStacks.popAt(2));
	setOfStacks.print();
}());
