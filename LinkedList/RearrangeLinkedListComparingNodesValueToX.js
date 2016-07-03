"use strict";

var LinkedList = require("./LinkedList");

var RearrangeLinkedListComparingNodesValueToX = {
	rearrange : function(linkedList, x){
		var temp,prev,tempHead;
		var n = linkedList.head;
	
		while(1){
			
			if(n.next === null) break;
			
			if(n.next.value < x){
				temp = n.next;
				linkedList.push(n.next.value);
				n.next = n.next.next;
			} else {
				n = n.next;
			}
		}
	}
};

module.exports = RearrangeLinkedListComparingNodesValueToX;


(function(){
	var linkedList = new LinkedList();
	linkedList.append(10);
	linkedList.append(2);
	linkedList.append(3);
	linkedList.append(8);	
	linkedList.append(9);
	linkedList.append(1);
	linkedList.printListInOneLine();
	RearrangeLinkedListComparingNodesValueToX.rearrange(linkedList,6);
	linkedList.printListInOneLine();
}());
