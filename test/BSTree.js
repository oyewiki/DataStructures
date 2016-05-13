"use strict";

var BSTree = require("../BSTree");
var Node = require("../Tree/TreeNode");
var bsTree;

describe("#BSTree", function(){

	before("#BSTree Initialise", function(){
		bsTree = new BSTree();
	});

	it("#BSTree Insertions", function(done){
		bsTree.insert(10);
		bsTree.insert(6);
		bsTree.insert(14);
		console.log(bsTree.search(6));
		bsTree.print();
		done();
	});
});