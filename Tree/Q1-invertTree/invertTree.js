"use strict";

var invertTree = function(root){
	swap(root);
}

var swap = function(node){
	var temp;

	//check if node is null or undefined
	if(node === null || node === undefined) return;

	//process left node again and then right node
	swap(node.left);
	swap(node.right);

	//finally swap nodes
	temp = node.left;
	node.left = node.right;
	node.right = temp;
}

module.exports = invertTree;