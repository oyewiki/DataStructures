"use strict";

var LinkedList = require("./LinkedList");

var AddTwoLinkedListInForwardOrder = {
	add : function(linkedList1, linkedList2){
		var linkedList3 = new LinkedList();
		var sum = 0;
		var carryOver = 0;

		processLinkedLists();
	
		//Fill shorter linkedlist with 0 to match lenght with bigger linked list.
		function processLinkedLists(){
			var len1 = 0;
			var len2 = 0;
			
			var l1 = linkedList1.head;
			var l2 = linkedList2.head;
			
			while(l1 !== null){
				len1++;
				l1 = l1.next;
			}

			while(l2 !== null){
				len2++;
				l2 = l2.next;
			}

			if(len1 === len2) return;

			if(len1 > len2){
				linkedList2 = populateLinkedList(linkedList2, len1-len2);
			} else {
				linkedList1 = populateLinkedList(linkedList1, len2-len1);
			}
		}

		function populateLinkedList(lnkdList, times){
			for(var i = 0; i< times; i++){
				lnkdList.push(0);
			}
			return lnkdList;
		}

		add(linkedList1.head, linkedList2.head);
		
		//Recursively add linked list
		function add(n1, n2){
			
			if(n1.next !== null || n2.next !== null) add(n1.next, n2.next);
			
			sum = 0;

			if(n1 !== null){
				sum += n1.value;
			}

			if(n2 !== null){
				sum += n2.value; 
			}

			sum = sum + carryOver;
			
			carryOver = Math.floor(sum / 10);
			sum = sum % 10;
			linkedList3.push(sum);
		}

		if(carryOver > 0) linkedList3.push(carryOver);		 
		
		return linkedList3;
	}

};

(function(){
        var linkedList1 = new LinkedList();
        var linkedList2 = new LinkedList();

        linkedList1.append(9);
        linkedList1.append(9);
        linkedList1.append(9);
	linkedList1.append(9);
	linkedList1.append(9);


        linkedList2.append(2);
        linkedList2.append(9);
        linkedList2.append(5);

        AddTwoLinkedListInForwardOrder.add(linkedList1, linkedList2).printListInOneLine();
}());
