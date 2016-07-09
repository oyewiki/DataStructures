"use strict";

var Tree = require("../Tree/Tree");
var tree = new Tree();
var Node = require("../Tree/TreeNode");
var BFSTraversal = require("../Tree/BFSTraversal");
var DFSTraversal = require("../Tree/DFSTraversal");
var VFSTraversal = require("../Tree/VFSTraversal");

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


	it("#Tree ===> DFS Tree Traversal", function(done){
		
		var dfsTraversal = new DFSTraversal();


		console.log("---------------------------------------");
		console.log("TreeHieght: " + dfsTraversal.height(tree.root));
		console.log("---------------------------------------");
		console.log("Inorder Traversal");
		console.log("---------------------------------------");
		dfsTraversal.inorderTraversal(tree.root);
		console.log("Preorder Traversal");
		console.log("---------------------------------------");
		dfsTraversal.preorderTraversal(tree.root);
		console.log("Postorder Traversal");
		console.log("---------------------------------------");
		dfsTraversal.postorderTraversal(tree.root);
		console.log("---------------------------------------");
		done();
	});

	it("#Tree ==> BFS Tree Traversal", function(done){
		var bfsTraversal = new BFSTraversal();
		
		console.log("\n\n\n---------------------------------------");
		console.log("TreeHieght: " + bfsTraversal.height(tree.root));
		console.log("---------------------------------------");
		console.log("Level Order Traversal");
		console.log("---------------------------------------");
		bfsTraversal.traverse(tree.root);
		console.log("\n\nLevel Order Traversal Line By Line");
		console.log("---------------------------------------");
		bfsTraversal.traverseLineByLine(tree.root);
		
		done();
	});

	it.only("#tree ==> VFS Tree Traversal", function(done){

		var vfsTraversal = new VFSTraversal();
		vfsTraversal.traverse(tree.root);
		done();
	});

});
