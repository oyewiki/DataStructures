"use strict";

var Node = require("./TreeNode");
var Queue = require("../Queue/Queue");
var util = require("util");

var Tree = function(){
	this.root = null;

}

Tree.prototype.deepPrint = function(first_argument) {
	// body...
};


/*

use will give nodePath and value.

We have to traverse through that node and 

add a node with the value.

*/

Tree.prototype.insertNode = function(nodePath, value) {
	nodePath = nodePath.split(".");

	var rootNode = this.root;

	if(rootNode === null && util.isArray(nodePath) && nodePath[0] === 'root'){
		rootNode = new Node(value);
		return;
	} else {
		nodePath = nodePath.slice(1);
	}
	console.log(nodePath);
	console.log(nodePath, rootNode);

	nodePath.forEach(function(node){
		rootNode = rootNode[node];
		console.log(rootNode);
	});

	rootNode = new Node(value);
	console.log(this.root);
};

Tree.prototype.topView = function(root){
	if(root === null || root === undefined){
		return;
	}

	iterate(root.left, "left");
	console.log(root.value);
	iterate(root.right, "right");

	var iterate = function(node, dir){
		if(node === null || node === undefined){
			return;
		}

		if(dir === 'left'){
			iterate(node.left, "left");
			console.log(node.value);
		} else {
			console.log(node.value);
			iterate(node.right, "right");
		}
	}
}

module.exports = Tree;