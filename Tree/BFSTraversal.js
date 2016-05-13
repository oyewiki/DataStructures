"use strict";

var Queue = require("../Queue/Queue");

var util = require("util");

var BFSTraversal = function(){
	this.queue = new Queue();
}

BFSTraversal.prototype.startTraversing = function(root){
	var tempNode = root;
	while(tempNode !== null){
		util.log(tempNode && tempNode.value && tempNode.value.toString());
		if(tempNode.left !== null) this.queue.enqueue(tempNode.left);
		if(tempNode.right !== null) this.queue.enqueue(tempNode.right);
		tempNode = this.queue.dequeue();
	}
}

module.exports = BFSTraversal;
