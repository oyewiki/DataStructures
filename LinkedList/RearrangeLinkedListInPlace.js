"use strict";

// Arrange - a1 -> a2 - > a3 -> a4 -> a5 -> b1 -> b2 -> b3 -> b4 -> b5
// To      - a1 -> b1 -> a2 -> b2 -> a3 -> b3 -> a4 -> b4 -> a5 -> b5

var LinkedList = require("./LinkedList");
var debug = require("debug")("Rearrange LinkedList In Place");

/** Algo for rearrnge method **/
// Asumption - In this we are assuming that the size of the linked list will always be even.
// First we will take two reference P1 and P2
// As we will start traversing the linked list
// We will move p1 two step while P2 will only move one step ahead
// Once P1 will reach the end at that time p2 will reach the mid of the linked list 
// that will solve our problem as at this point of time we will re initalise P1 to first element
// Than we will point first element of p1 to first element of p2 and so on.

var RearrangeLinkedListInPlace = {
	rearrange : function(linkedList){
		var p1 = linkedList.head;
		var p2 = linkedList.head;
		var temp1, temp2;
		
		while(p1.next.next !== null){
			if(p1.next === null) break;
			p2 = p2.next;
			p1 = p1.next.next;
			debug(p1.value, p2.value);
		}

		p1 = linkedList.head;

		while(p1 !== null){
		
			// First we will extract node
			temp2 = p2.next;
			p2.next = p2.next.next;

			// Add extracted node after p1
			temp1 = p1.next;
			p1.next = temp2;

			// Add previous p1.next after attached new node
			p1.next.next = temp1;

			// Prepare p1 for next loop
			p1 = p1.next.next;

		}
		

		return linkedList;
	}
};

module.exports = RearrangeLinkedListInPlace;


(function(){
	var linkedList = new LinkedList();
	linkedList.append("a1");
        linkedList.append("a2");
        linkedList.append("a3");
        linkedList.append("a4");
        linkedList.append("a5");
     	linkedList.append("a6");
	linkedList.append("a7");
	linkedList.append("a8");
	linkedList.append("b1");
        linkedList.append("b2");
        linkedList.append("b3");
        linkedList.append("b4");
        linkedList.append("b5");
	linkedList.append("b6");
	linkedList.append("b7");
	linkedList.append("b8");
	linkedList.printListInOneLine();
	linkedList = RearrangeLinkedListInPlace.rearrange(linkedList);
	linkedList.printListInOneLine();
}());
