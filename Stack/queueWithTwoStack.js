

"use strict";

var Stack = require('./');

var TwoStackQueue = function(){
	this.stack1 = new Stack();
	this.stack2 = new Stack();
};

TwoStackQueue.prototype.push = function(value){
	//Simply push the value to stack 1
	this.stack1.push(value);	
};

TwoStackQueue.prototype.pop = function(){
	//check if stack2 is empty 
	if(this.stack2.isEmpty()){
		_shiftKeys(this);
	}
	//return by poping an item from stack2
	return this.stack2.pop();
};

var _shiftKeys = function(self){
	self.stack1.print();
	var item;
	while(!self.stack1.isEmpty()){
		item = self.stack1.pop();
		self.stack2.push(item);
	}
};


(function(){
	var twoStackQueue = new TwoStackQueue();
	twoStackQueue.push(10);
	twoStackQueue.push(12);
	console.log(twoStackQueue.pop());
	twoStackQueue.push(14);
	twoStackQueue.push(16);
	console.log(twoStackQueue.pop());	
}());
