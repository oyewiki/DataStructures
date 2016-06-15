"use strict";

var Node = require("./LListNode");
var _ = require("lodash");

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

//Method to push new node at the front
LinkedList.prototype.push = function(new_value) {
	//Create a new node with new_value as value
	var new_node = new Node(new_value);
	//point its next pointer to head
	new_node.next = this.head;
	//point head to this new node
	this.head = new_node;
};

//Method to insert a node after a postion
LinkedList.prototype.insertAfter = function(previousNode, new_value) {
	//check if previous node is null.
	if(previousNode === null){
		console.log("Previous node can not be null.");
		return;
	}
	//Create a new node
	var new_node = new Node(new_value);
	//Assign new node's next pointer to previous node's next
	new_node.next = previousNode.next;
	//assign previous node's next to this new node
	previousNode.next = new_node;
};

//Method to add a node in the end of the linked list
LinkedList.prototype.append = function(new_value) {
	//Check if head is null or not
	if(this.head === null){
		//if yes than linked list is empty adding new node in the first position
		return this.head = new Node(new_value);
	}
	var n = this.head;
	//Traversing the linked list
	//Loop till the last node
	while(n != null){
		if(n.next === null){
			//create a new node
			var new_node = new Node(new_value);
			//Assign last elements next pointer to new node
			n.next = new_node;
			return;
		}
		n = n.next;
	}
};

//Method to delete node element by key or value
LinkedList.prototype.deleteByKey = function(key) {

	//check if head is empty
	if(this.head == null){
		console.log("Head is null");
		return;
	}
	
	//check if head's value is equal to key
	if(this.head != null && this.head.value == key){
		return this.head = this.head.next;
	}


	var n = this.head.next;
	var temp = this.head;

	//loop through the linked list
	while(n != null){
		//if node's value is equal to key than delete that node
		if(n.value == key){
			temp.next = n.next;
			return;
		}
		temp = n;
		n = n.next;
	}
	console.log("Linked list ended");
};

//Method to delete a node by position in linked list
LinkedList.prototype.deleteAtPosition = function(position) {

	//Check if head is null
	if(this.head == null){
		console.log("Head is null");
		return;
	}

	var count = 0;
	//check if we need to delete first node
	if(this.head != null && count === position){
		return this.head = this.head.next;
	}

	//start traversing from first node
	count ++;
	var n = this.head.next;
	var temp = this.head;
	
	//loop through the linked list
	while(n != null){
		//check if we need to delete current position
		if(count === position){
			temp.next = n.next;
			return;
		}
		//increment to go to next node
		count ++;
		temp = n;
		n = n.next;
	}

	if(count < position) console.log("Reached end of linked list, linked list is less than given " + position);
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


//Method to swap two nodes of a linked list by value
LinkedList.prototype.swapping = function(val1, val2) {

	//Check if head is null
	if(this.head == null){
		console.log("Can't swap, linked list is empty");
		return;
	}

	//Take reference to the head of the linked list
	var n = this.head;
	var temp = null;
	var node1 = null;
	var node2 = null;

	//Call findNode recursively
	findNode(n);

	function findNode(n){
		if(n.value == val1){ node1 = n; }
		if(n.value == val2){ node2 = n; }
		//if either of node1, node2 is not set 
		if(!node1 || !node2){
			if(n.next === null){
				console.log("Linked List ended, didn't find both the nodes");
				return;
			}
			findNode(n.next);
		} else {
			if(node1.value == node2.value) return;
			node1.value = node1.value*node2.value;
			node2.value = node1.value/node2.value;
			node1.value = node1.value/node2.value;
			return;
		}

	}
	return;
};

LinkedList.prototype.reverse = function(){
	var n = this.head;
	var prev = null;

	while(n!== null){
		var next = n.next;
		n.next = prev;
		prev = n;
		n = next;
	}

	this.head = prev;

	return;
}

module.exports = LinkedList;