"use strict";

var Queue = require("../Queue/Queue");

var util = require("util");

var BFSTraversal = function(){
	
}

BFSTraversal.prototype.traverse = function(root){
	var queue = new Queue();
	queue.enqueue(root);
	while(!queue.isEmpty()){
		var node = queue.dequeue();
		console.log(node.value);
		if(node.left !== null) queue.enqueue(node.left);
		if(node.right !== null) queue.enqueue(node.right);
	}
}

BFSTraversal.prototype.traverseLineByLine = function(root){
	var queue = new Queue();
	queue.enqueue(root);

	while(1){
		var nodeCount = queue.size();
	}
	// while(!queue.isEmpty()){
	// 	var node = queue.dequeue();
	// 	console.log(node.value);
	// 	if(node.left !== null) queue.enqueue(node.left);
	// 	if(node.right !== null) queue.enqueue(node.right);
	// }
}

BFSTraversal.prototype.height = function(root){
	if(root === null) return 0;

	var queue = new Queue();
	var height = 0;
	var nodeCount = 0;

	while(1){
		queue.enqueue(root);
		nodeCount = queue.size;
		if(nodeCount === 0) return height;
		
		height++;

		console.log(height, nodeCount, this.queue.size);
		//break;

		if(nodeCount >10) break;

		while(nodeCount > 0){
			var node = queue.dequeue();
			if(node.left !== null && node.left !== undefined) queue.enqueue(node.left);
			if(node.right !== null && node.right !== undefined) queue.enqueue(node.right);
			nodeCount--;
			console.log(height, nodeCount, queue.size);
		}

	}
};

module.exports = BFSTraversal;
