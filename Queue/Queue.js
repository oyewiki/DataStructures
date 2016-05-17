"use strict";

var util = require("util");

//Initialise Queue
var Queue = function(){
	this.front = 0;
	this.rear = 0;
	this.size = 0;
	this.queue = [];
};

//Enqueue - Add an item to queue
Queue.prototype.enqueue = function(value){
	this.queue[this.rear] = value;
	this.rear++;
	this.size++;
};

//Dequeue - Remove an item from the queue
Queue.prototype.dequeue = function(){
	if(this.size === 0) return util.log("Nothing to dequeue, Queue is already empty.");
	var item = this.queue[this.front];
	this.front++;
	this.size--;
	return item;
};

//isEmpty - returns true if queue is empty
Queue.prototype.isEmpty = function(){
	return (this.size === 0);
};

//Front - The pointer to the first inserted element
Queue.prototype.front = function(){
	return this.front;
};

//Rear - The pointer to the last inserted element
Queue.prototype.rear = function(){
	return this.rear;
};

//Size - returns the size of the queue at any point of time
Queue.prototype.size = function(){
	return this.size;
};

//Print the queue with some of the properties.
Queue.prototype.print = function(){
	util.log("Front : " + this.front.toString());
	util.log("Rear : " + this.rear.toString());
	util.log("Queue Size : " + this.size.toString());
	util.log("Queue isEmpty : " + this.isEmpty().toString());
	util.log("Queue: ");
	util.log("-----------------------------------");
	for(var i = this.front; i<=this.rear - 1; i++){
		util.log(this.queue[i].toString());
	}
};

module.exports = Queue;