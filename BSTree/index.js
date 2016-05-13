"use strict";

var Node = require("../Tree/TreeNode");

var BSTree = function(){
	this.root = null;
}

BSTree.prototype.insert = function(value) {

	insert(this.root, value);

	function insert(node, value){
		if(node === null) { 
			node = new Node(value);
		} else if(value < node.value){
			insert(node.left, value);
		} else {
			insert(node.right, value);
		}

	}

};

