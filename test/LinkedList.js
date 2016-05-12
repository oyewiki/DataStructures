"use strict";
var LinkedList = require("../LinkedList/LinkedList");
var linkedList = new LinkedList();

describe("Linked List", function() {

	it("#Linked List ==> Print", function(done) {
		console.log(linkedList);
		done();
	});

	it("#Linked List ==> Traverse", function(done) {
		linkedList.printList();
		done();
	});

	it("#Linked List ==> Insertion in front", function(done) {
		linkedList.push(7);
		linkedList.push(1);
		linkedList.push(3);
		linkedList.push(2);
		linkedList.printList();
		//linkedList.deepPrintList();
		done();
	});

	it("#Linked List ==> Insertion after a node", function(done) {
		linkedList.insertAfter(linkedList.head.next, 5);
		linkedList.printList();
		//linkedList.deepPrintList();
		done();
	});

	it("#Linked List ==> Append a node", function(done) {
		linkedList.append(11);
		linkedList.append(13);
		linkedList.printList();
		linkedList.deepPrintList();
		done();
	});

	// it("#Linked List ==> Delete by Key", function(done) {
	// 	linkedList.deleteByKey(7);
	// 	linkedList.deleteByKey(11);
	// 	linkedList.printList();
	// 	linkedList.deepPrintList();
	// 	done();
	// });

	// it("#Linked List ==> Delete at Position", function(done) {
	// 	linkedList.deleteAtPosition(9);
	// 	linkedList.printList();
	// 	linkedList.deepPrintList();
	// 	done();
	// });
	
	it("#Linked List ==> Get Count By Iteration", function(done) {
		linkedList.getCountByIteration();
		done();
	});

	it("#Linked List ==> Get Count By Recursion", function(done) {
		linkedList.getCountByRecursion();
		done();
	});

	it("#Linked List ==> Swapping", function(done) {
		linkedList.swapping(3,11);
		linkedList.printList();
		done();
	});

});