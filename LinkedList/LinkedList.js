"use strict";

var Node = require("./LListNode");

var LinkedList = function(){
	this.head = null;
};

LinkedList.prototype.printList = function(){
	var n = this.head;
	while(n !== null){
		console.log(n.value);
		n = n.next;
	}
};

LinkedList.prototype.printListInOneLine = function(){
	var n = this.head;
	var elem = '';
	while(n !== null){
		elem  += "->" + n.value;
		n = n.next;
	}
	console.log("head" + elem);
};

LinkedList.prototype.deepPrintList = function() {
	var n = this.head;
	while(n !== null){
		console.log(n);
		n = n.next;
	}
};

LinkedList.prototype.push = function(new_value) {
	var new_node = new Node(new_value);
	new_node.next = this.head;
	this.head = new_node;
};

LinkedList.prototype.insertAfter = function(previousNode, new_value) {
	if(previousNode === null){
		console.log("Previous node can not be null.");
		return;
	}
	var new_node = new Node(new_value);
	return;
	new_node.next = previousNode.next;
	previousNode.next = new_node;
};

LinkedList.prototype.append = function(new_value) {
	if(this.head === null){
		return this.head = new Node(new_value);
	}
	var n = this.head;
	while(n != null){
		if(n.next === null){
			var new_node = new Node(new_value);
			n.next = new_node;
			return;
		}
		n = n.next;
	}
};

LinkedList.prototype.deleteByKey = function(key) {

	if(this.head == null){
		console.log("Head is null");
		return;
	}
	
	if(this.head != null && this.head.value == key){
		return this.head = this.head.next;
	}

	var n = this.head.next;
	var temp = this.head;

	while(n != null){
		if(n.value == key){
			temp.next = n.next;
			return;
		}
		temp = n;
		n = n.next;
	}
	console.log("Linked list ended");
};

LinkedList.prototype.deleteAtPosition = function(position) {

	if(this.head == null){
		console.log("Head is null");
		return;
	}

	var count = 0;
	if(this.head != null && count === position){
		return this.head = this.head.next;
	}

	count ++;
	var n = this.head.next;
	var temp = this.head;
	
	while(n != null){
		if(count === position){
			temp.next = n.next;
			return;
		}
		count ++;
		temp = n;
		n = n.next;
	}
	console.log("Linked list ended");
};

LinkedList.prototype.getCountByIteration = function() {
	if(this.head == null){
		console.log("head is null length is 0");
		return;
	}

	var count = 0;
	var n = this.head;
	while(n != null){
		count ++;
		n = n.next;
	}
	console.log("Linked list length is " + count);
	return;	
};

LinkedList.prototype.getCountByRecursion = function() {
	if(this.head == null){
		console.log("head is null length is 0");
		return;
	}

	var n = this.head;
	var count = 0;
	incrCount(n);
	function incrCount(n){
		if(n == null){
			console.log("Linked list length is " + count);
			return;
		}
		count++;
		incrCount(n.next);
	}
};

LinkedList.prototype.swapping = function(val1, val2) {

	if(this.head == null){
		console.log("Can't swap, linked list is empty");
		return;
	}

	var n = this.head;
	var temp = null;
	var node1 = null;
	var node2 = null;

	findNode(n);

	function findNode(n){
		if(n.value == val1){ node1 = n; }
		if(n.value == val2){ node2 = n; }
		if(!node1 || !node2){
			if(n.next === null){
				console.log("Linked List ended, didn't find both the nodes");
				return;
			}
			findNode(n.next);
		} else {
			if(node1.value == node2.value) return;
			// temp = node1.value;
			// node1.value = node2.value;
			// node2.value = temp;
			node1.value = node1.value*node2.value;
			node2.value = node1.value/node2.value;
			node1.value = node1.value/node2.value;
			return;
		}

	}
	return;
};

module.exports = LinkedList;