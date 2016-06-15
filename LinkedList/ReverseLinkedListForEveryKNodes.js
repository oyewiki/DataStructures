"use strict";

var debug = require("debug")("ReverseLinkedListForEveryKNodes");

module.exports = {
	start : function(k, linkedlist){
		var n = linkedlist.head;

		linkedlist.head = reverse(n, k);

		return;

		function reverse(head, k){
			var n = head;
			var count = 0;
			var prev = null;

			console.log("\n\nHEAD", head);

			while(n !== null && count < k){
				var next = n.next;
				n.next = prev;
				prev = n;
				n = next;
				count ++;
			}

			console.log("PREV", prev, "\n\n");

			console.log("HEADDDD",head,n);

			head.next = n;

			// if(n !== null){
			// 	head.next = reverse(n, k);
			// 	console.log("HEAD.NEXT",head.next, "\n\n");
			// }

			return prev;
		}
	}
};