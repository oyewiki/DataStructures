"use strict";

var debug = require("debug")("SwapKthNodeFromStartAndEnd: ");

function getCount(linkedList){
	var n = linkedList.head;
	var count = 0, n = linkedList.head;
	while(n !== null){
		count ++;
		n = n.next;
	}
	return count;
}

module.exports = {
	start : function(k, linkedList){

		var n = getCount(linkedList);
		var m = linkedList.head;
		var count = 1;
		var temp = null, kthStart = null, kthEnd = null;

		console.log(n + ", " + count + ", " + k);

		if(n < k) {
			console.log("Linked List length is less than " + k);
			return;
		}

		if(k === n - k + 1){
			console.log("Kth node from the start is same as Kth node from the end. No Need to swap");
			return;
		}

		while(m !== null){
			if(kthStart && kthEnd) break;
			if(count === k) kthStart = m;
			if(count === n - k + 1) kthEnd = m;
			count++;
			m = m.next;
		}

		temp = kthStart.value;
		kthStart.value = kthEnd.value;
		kthEnd.value = temp;

		return linkedList;
	}
};