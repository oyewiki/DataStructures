"use strict";

var debug = require("debug")("ReverseLinkedListForFirstKNodes");
var _ = require("lodash");


//traverse the linked list till k point
//	Checki if length is less than k reverse the whole linked list.
//	else reverse the linked list from kth
//		After words point all the node the the previous node and head to the k+1 th node.
//	

module.exports = {
	start : function(k, linkedList){
		var n = linkedList.head;
		var count = 1;
		var prev = null;

		if(n === null || n === undefined){
			console.log("Linked list is empty");
			return;
		}

		while(n !== null){
			if(count <= k) {
				var next = n.next;
				n.next = prev;
				prev = n;
				n = next;
				count ++;
			} else {
				break;
			}
		}

		linkedList.head = prev;

		var m = linkedList.head;

		console.log(m);

		while (m!=null) {
			if(!m.next){
				m.next = n;
				break;
			}
			m = m.next;
		} 

		return linkedList;
	}
};

//complexity is k