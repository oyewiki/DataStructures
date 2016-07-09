"use strict";

var LinkedList = require("../LinkedList/LinkedList");

function pushInMap(map, index){
	map[index] = new LinkedList();
	return map;
}

function printMap(map){
	console.log(map);
	map = map || {};
	Object.keys(map).forEach(function(vHeight){
		var list = map[vHeight];
		
		console.log("\nVertical Height: " + vHeight + "\n------------------------------------------------");
		list.printListInOneLine();
	});
}


var VFSTraversal = function(){
	this.map = {};	
};

VFSTraversal.prototype.traverse = function(root){
	
	var vHeight = 0;	
	var map = this.map;

	if(root === null || root === undefined){
		return null;	
	}

	iterate(root, vHeight);

	printMap(map);

	function iterate(node, vHeight){
		
		if(node === null || node === undefined){
			return;
		}
				
		if(!map[vHeight]){
			map = pushInMap(map, vHeight);
		}

		map[vHeight].push(node.value);

		if(node.left) iterate(node.left, vHeight - 1);

		if(node.right) iterate(node.right, vHeight + 1);
	}
	
};

module.exports = VFSTraversal;
