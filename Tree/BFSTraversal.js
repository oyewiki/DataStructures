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
		var nodeCount = queue.size;
		var line = "";

		if(nodeCount === 0) break;

		while(nodeCount > 0){
			var item = queue.dequeue();
			
			line += item.value + ", ";

			if(item.left) queue.enqueue(item.left);
			if(item.right) queue.enqueue(item.right);

			nodeCount--;
		}

		//removing last ','
		line = line.split(",");
		line = line.splice(0, line.length - 1);
		line = line.join(",");
		console.log(line);
	}
}

BFSTraversal.prototype.height = function(root){
	var queue = new Queue();
	queue.enqueue(root);
	var height = 0;

	while(1){
		var nodeCount = queue.size;
		var line = "";

		if(nodeCount === 0) {
			return height;
		} else {
			height++;
		}

		while(nodeCount > 0){
			var item = queue.dequeue();
			
			line += item.value + ", ";

			if(item.left) queue.enqueue(item.left);
			if(item.right) queue.enqueue(item.right);

			nodeCount--;
		}
	}
};

module.exports = BFSTraversal;
