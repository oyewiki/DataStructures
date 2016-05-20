"use strict";

var PrintTreeInVerticalOrder = function(root){

	this.min = 0;
	this.max = 0;

};

PrintTreeInVerticalOrder.prototype.findMinMax = function(root){
	var self = this;

	iterate(root, 0);

	function iterate(node, hd){
		if(node === null) return;

		if(node.left !== null) iterate(node.left, hd-1);
		if(node.right !== null) iterate(node.right, hd+1);

		if(hd < self.min) self.min = hd;
		if(hd > self.max) self.max = hd;
	}
};

PrintTreeInVerticalOrder.prototype.printLineByLine = function(root){

	var text;

	for(var i = this.min; i <= this.max; i++){
		text = '';
		console.log(iterate(root, i, 0));
	}

	function iterate(node, line_no, hd){

		if(node === null) return;

		if(line_no === hd) text += node.value + " ";

		if(node.left !== null) iterate(node.left, line_no, hd-1);
		if(node.right !== null) iterate(node.right, line_no, hd+1);

		return text;
	}
}

PrintTreeInVerticalOrder.prototype.printTopView = function(root){
	var text;

	for(var i = this.min; i <= this.max; i++){
		text = '';
		console.log(iterate(root, i, 0));
	}

	function iterate(node, line_no, hd){

		if(node === null) return;

		if(node.left !== null) iterate(node.left, line_no, hd-1);
		if(node.right !== null) iterate(node.right, line_no, hd+1);

		//if(line_no === hd && text === '') text = node.value;

		if(line_no === hd) text = node.value;

		return text;
	}
}



module.exports = PrintTreeInVerticalOrder;