"use strict";

var Node = require("../Tree/TreeNode");
var DFSTraversal = require("../Tree/DFSTraversal");

var BSTree = function(){
	this.root = null;
	this.dfsTraversal = new DFSTraversal();
}

BSTree.prototype.insert = function(value) {

	var n = new Node(value);

	if(this.root === null){
		this.root = n;
	} else {
		iterate(this.root);
	}

	function iterate(node){
		
		if(value < node.value) {
		
			if(node.left === null){
				node.left = n;
				return;
			} else {
				iterate(node.left);
			}
		
		} else if(value > node.value) {
		
			if(node.right === null){
				node.right = n;
			} else {
				iterate(node.right);
			}
		
		} else {
		
			return;
		
		}

	}
};

BSTree.prototype.search = function(value){

	var searchedNode = null;

	iterate(this.root, value);

	function iterate(node, value){
		if(node === null || node === undefined){
			return null;
		}

		if(node.value === value){
			searchedNode = node;
		}

		if(value < node.value){
			iterate(node.left, value);
		} else if(value > node.value) {
			iterate(node.right, value);
		}
	}

	return searchedNode;
};

BSTree.prototype.print = function(){
	console.log(this.root);
	this.dfsTraversal.inorderTraversal(this.root);
};

module.exports = BSTree;
