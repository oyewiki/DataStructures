"use strict";

var LinkedList = require("./LinkedList");

var AddTwoLinkedListInReverseOrder = {
	add : function(linkedList1, linkedList2){
		var linkedList3 = new LinkedList();
		var l1,l2;
		var sum = 0;
		var carryOver = 0;

		l1 = linkedList1.head;
		l2 = linkedList2.head;

		while(1){
			if(l1 !== null && l2 !== null){
				sum = l1.value + l2.value + carryOver;
				
				linkedList3.append(sum % 10);
				carryOver = Math.floor(sum / 10);
				l1 = l1.next; l2 = l2.next; continue;
						
			} else if(l1 !== null){
				sum = l1.value + carryOver;
				linkedList3.append(sum % 10);
                                carryOver = Math.floor(sum / 10);
				l1 = l1.next; continue;
			} else if(l2 !== null){
				sum = l2.value + carryOver;
				linkedList3.append(sum % 10);
                                carryOver = Math.floor(sum / 10);
				l2 = l3.next; continue;
			} else {
				if(carryOver > 0) linkedList3.append(carryOver);
				break;
			}
		}
		
		
		return linkedList3;	
	}
};

(function(){
	var linkedList1 = new LinkedList();
	var linkedList2 = new LinkedList();

	linkedList1.append(9);
	linkedList1.append(9);
	linkedList1.append(9);

	linkedList2.append(5);
	linkedList2.append(9);
	linkedList2.append(2);
	
	AddTwoLinkedListInReverseOrder.add(linkedList1, linkedList2).printListInOneLine();
}());
