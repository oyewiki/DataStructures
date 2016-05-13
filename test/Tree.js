"use strict";

var Tree = require("../Tree/Tree");
var tree = new Tree();
var Node = require("../Tree/TreeNode");
var BFSTraversal = require("../Tree/BFSTraversal");

describe("Tree", function(){

	before("Create a basic tree", function(){
		tree.root = new Node(10);
		tree.root.left = new Node(6);
		tree.root.left.left = new Node(4);
		tree.root.left.left.left = new Node(3);
		tree.root.left.left.right = new Node(5);
		tree.root.left.right = new Node(8);
		tree.root.left.right.left = new Node(7);
		tree.root.left.right.right = new Node(9);
		tree.root.right = new Node(14);
		tree.root.right.left = new Node(12);
		tree.root.right.left.left = new Node(11);
		tree.root.right.left.right = new Node(13);
		tree.root.right.right = new Node(16);
		tree.root.right.right.left = new Node(15);
		tree.root.right.right.right = new Node(17);
	});

	it.skip("#Tree ===> insertion", function(done){
		done();
	});


	it.skip("#Tree ===> BFS Tree Traversal", function(done){
		
		console.log("Inorder Traversal");
		console.log("---------------------------------------");
		BFSTraversal("in", tree.root);
		console.log("Preorder Traversal");
		console.log("---------------------------------------");
		BFSTraversal("pre", tree.root);
		console.log("Postorder Traversal");
		console.log("---------------------------------------");
		BFSTraversal("post", tree.root);
		console.log("---------------------------------------");
		done();
	});

	it("#Tree ===> DFS Tree Traversal", function(done){
		console.log("Tree Height");
		console.log("---------------------------------------");
		console.log(tree.getHeight(tree.root));
		console.log("Tree Height Iteratively");
		console.log("---------------------------------------");
		console.log(tree.getHeightIteratively(tree.root));
		console.log("Tree Top View");
		console.log("---------------------------------------");
		tree.topView(tree.root);
		done();
	});

	it.skip("#Tree ==> BFS Tree Traversal", function(done){
		var bfsTraversal = new BFSTraversal();
		bfsTraversal.startTraversing(tree.root);
		done();
	});

});