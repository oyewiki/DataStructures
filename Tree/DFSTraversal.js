"use strict";

var DFSTraversal = function(){
}

DFSTraversal.prototype.inorderTraversal = function(root){

	iterate(root);
	
	function iterate(node){
		if(node === null || node === undefined) return;

		if(node.left) iterate(node.left);
		console.log(node.value);
		if(node.right) iterate(node.right);
	}
};

DFSTraversal.prototype.preorderTraversal = function(root){
	iterate(root);
	
	function iterate(node){
		if(node === null || node === undefined) return;

		console.log(node.value);
		if(node.left) iterate(node.left);
		if(node.right) iterate(node.right);
	}
};

DFSTraversal.prototype.postorderTraversal = function(root){
	iterate(root);
	
	function iterate(node){
		if(node === null || node === undefined) return;

		if(node.left) iterate(node.left);
		if(node.right) iterate(node.right);
		console.log(node.value);
	}
};

DFSTraversal.prototype.height = function(root){
	return getHeight(root);

	function getHeight(node){
		if(node === null || node === undefined){
			return 0;
		}

		var lHeight = getHeight(node.left);
		var hHeight = getHeight(node.right);

		return (lHeight > hHeight) ? lHeight + 1 : hHeight + 1;
	}
};

module.exports = DFSTraversal;

