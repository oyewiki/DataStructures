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

Heap.prototype.heapSize = function(){
	return this.heap.length;
};

Heap.prototype.swap = function(i1, i2){
	this.heap[i1] = this.heap[i1]*this.heap[i2];
	this.heap[i2] = this.heap[i1]/this.heap[i2];
	this.heap[i1] = this.heap[i1]/this.heap[i2];
};

Heap.prototype.insertKey = function(value){
	this.heap[this.heap.length] = value;

	var i = this.heapSize()-1;
	while(i !== 0 && this.heap[this.parent(i)] > this.heap[i] ) {
		this.swap(i, this.parent(i));
		i = this.parent(i);
	}
};

Heap.prototype.decreaseKey = function(index, new_value){
	this.heap[index] = new_value;

	var i = index;

	while(i !== 0 && this.heap[this.parent(i)] > this.heap[i]) {
		this.swap(i, this.parent(i));
		i = this.parent(i);
	}
};

Heap.prototype.getMin = function(){
	return this.heap[0];
};

Heap.prototype.extractMin = function(){

	if(this.heapSize()===0){
		return null;
	} else if(this.heapSize()===1) {
		return this.heap.pop();
	} 

	var root = this.heap[0];
	this.heap[0] = this.heap[this.heapSize()-1];
	this.heap.pop();
	this.minHeapify(0);
	return root;
};

Heap.prototype.deleteKey = function(index){
	this.decreaseKey(index, -1);
	this.extractMin();
};

Heap.prototype.minHeapify = function(index){
	var smallest = index;
	if(this.getLeftChild(index) < this.heapSize() && this.heap[this.getLeftChild(index)] < this.heap[index]){
		smallest = this.getLeftChild(index);
	}
	if(this.getRightChild(index) < this.heapSize() && this.heap[this.getRightChild(index)] < smallest){
		smallest = this.getRightChild(index);
	}
	if(smallest != index){
		this.swap(smallest, index);
		this.minHeapify(smallest);
	}
};

Heap.prototype.print = function(){
	console.log(this.heap.join(","));
}

module.exports = Heap;