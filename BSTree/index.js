"use strict";

var Node = require("../Tree/TreeNode");
var DFSTraversal = require("../Tree/DFSTraversal");

var BSTree = function(){
	this.root = null;
	this.dfsTraversal = new DFSTraversal();
}

//Method to insert a node in binary search tree
BSTree.prototype.insert = function(value) {

	//create a node with given value
	var n = new Node(value);

	//check if root is null 
	//then assign new node to root 
	//else call iterate method
	if(this.root === null){
		this.root = n;
	} else {
		iterate(this.root);
	}

	function iterate(node){
		
		//check if node value to be added is less 
		//than the traversed node value
		//else check for right node
		if(value < node.value) {
			
			//if left child of node is null 
			//than assign new node to left child
			//else call iterate method
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


//Methods to search in a binary tree
BSTree.prototype.search = function(value){

	var searchedNode = null;

	//Call iterate method by passing root in it.
	iterate(this.root, value);

	function iterate(node, value){
		//check if node is null.
		if(node === null || node === undefined){
			return null;
		}

		//Check if node's value is equal to the value we are searching for.
		if(node.value === value){
			searchedNode = node;
		}

		//Move to the left child if value is less thn node's value
		if(value < node.value){
			iterate(node.left, value);
		//Move to the right if the value is more than the node's value
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
