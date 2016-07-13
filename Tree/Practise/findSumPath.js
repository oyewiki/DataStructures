"use strict";

var Tree = require("../Tree");
var Node = require("../TreeNode");
var findSumPath = {
	traverse : function(tree, sum){
		
		if(!tree || !tree.root){
			return null;
		}
		
		var path = [];
		var level = 0;

		findSum(tree.root, path, level, sum)

		function findSum(node, path, level, sum){
			if(node === null || node === undefined){
				return null;
			}

			path[level] = node.value;

			calculateSum(path, level, sum);			
	
//			console.log(node.value, path, level, sum);			
			
			findSum(node.left, path, level + 1, sum);
			findSum(node.right, path, level + 1, sum);

			path[level] = 0;
		}

		function calculateSum(path, level, sum){
			var t = 0;
			for(var i = level; i >= 0; i--){
                                t += path[i];
                                if(t === sum){
                                        print(path,i, level);
                                }
                        }
		}

		function print(path, start, end){
			var p = "";

			for(var i = start; i <= end; i++){
				p += path[i] + " ";
			}

			console.log(p);
		}
	}
};

module.exports = findSumPath;

(function(){
	var tree = new Tree();
        tree.root = new Node(10);
        tree.root.left = new Node(7);
        tree.root.left.left = new Node(5);
        tree.root.left.left.left = new Node(3);
        tree.root.right = new Node(13);
	tree.root.right.left = new Node(-5);
	tree.root.right.right = new Node(-15);
	
	findSumPath.traverse(tree, 8);
}());
