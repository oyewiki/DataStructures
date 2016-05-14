"use strict";

var Heap = function(){
	this.size = 0;
	this.heap = [];
}

Heap.prototype.parent = function(childIndex){
	return Math.floor((childIndex-1)/2);
};

Heap.prototype.getLeftChild = function(parentIndex){
	return (2*parentIndex) + 1;
};

Heap.prototype.getRightChild = function(parentIndex){
	return (2*parentIndex) + 2;
};

Heap.prototype.insertKey = function(value){

};

Heap.prototype.deleteKey = function(index){

};