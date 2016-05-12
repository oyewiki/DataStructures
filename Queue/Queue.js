"use strict";

var util = require("util");

var Queue = function(){
	this.front = 0;
	this.rear = 0;
	this.size = 0;
	this.queue = [];
};

Queue.prototype.enqueue = function(value){
	this.queue[this.rear] = value;
	this.incRear();
	this.incSize();
};

Queue.prototype.dequeue = function(){
	if(this.size === 0) return util.log("Nothing to dequeue, Queue is already empty.");
	var item = this.queue[this.front];
	this.incFront();
	this.decSize();
	return item;
};

Queue.prototype.isEmpty = function(){
	return (this.size === 0);
};

Queue.prototype.front = function(){
	return this.front;
};

Queue.prototype.rear = function(){
	return this.rear;
};

Queue.prototype.size = function(){
	return this.size;
};

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

Queue.prototype.incRear = function(){
	this.rear++;
};

Queue.prototype.incFront = function(){
	this.front++;
};

Queue.prototype.incSize = function(){
	this.size++;
};

Queue.prototype.decSize = function(){
	if(this.size === 0) return util.log("Can not decrease size, Size is already 0");
	this.size--;
};

module.exports = Queue;