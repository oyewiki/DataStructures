"use strict";

var Tree = require("../Tree");
var Node = require("../TreeNode");

var CheckBalancedTree = function(tree){
	var balancedFlag = true;
	
	console.log(getHeight(tree.root));
	console.log(balancedFlag);

	function getHeight(node){
		if(node === null) return -1;
		
		var lHeight = getHeight(node.left);
		var rHeight = getHeight(node.right);
		
		var diff = lHeight - rHeight;
		if(diff > 1 || diff < -1){
			balancedFlag = false;
		}

		return (lHeight > rHeight) ? lHeight + 1 : rHeight + 1;
	}
};

module.exports = CheckBalancedTree;

(function(){
	var tree = new Tree();
	tree.root = new Node(10);
	tree.root.left = new Node(7);
	tree.root.left.left = new Node(5);
	tree.root.left.left.left = new Node(3);
	tree.root.right = new Node(13);
	
	var checkBalancedTree = new CheckBalancedTree(tree);
}());
