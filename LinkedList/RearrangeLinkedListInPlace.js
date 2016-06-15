"use strict";

var TempLinkedList = require("./linkedList");

var RearrangeLinkedListInPlace = function(linkedList){
	this.tempLinkedList = new TempLinkedList();
	this.linkedList = linkedList;
};

RearrangeLinkedListInPlace.rearrange = function(){
	
	function findSize(linkedList){
		var size = 0;
		var n = linkedList && linkedList.head;
		while(n != null){
			size ++;
			n = n.next;
		}
		return size;
	}

	function populateTempLinkedList(){
		var n = this.linkedList && this.linkedList.head;
		if(n === null) return;
		var count = 0;
		while(n !== null){
			if(count > findSize(this.linkedList)/2){
				this.tempLinkedList.push(n.value)
			}
			n = n.next;
			count++;
		}		
	}

	var n = this.linkedList && this.linkedList.head;

	if(n === null || n === undefined) return console.log("Empty Linked List");

	//pick one from temp linked list and insert in linked list by position


};



