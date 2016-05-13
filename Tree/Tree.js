"use strict";

var Tree = function(){
	this.root = null;

}

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