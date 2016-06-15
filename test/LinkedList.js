"use strict";
var LinkedList = require("../LinkedList/LinkedList");
var linkedList = new LinkedList();
var SwapKthNodeFromStartAndEnd = require("../LinkedList/SwapKthNodeFromStartAndEnd");
var ReverseLinkedListForFirstKNodes = require("../LinkedList/ReverseLinkedListForFirstKNodes");
var ReverseLinkedListForEveryKNodes = require("../LinkedList/ReverseLinkedListForEveryKNodes");

describe.skip("Linked List", function() {

	it.skip("#Linked List ==> Print", function(done) {
		console.log(linkedList);
		done();
	});

	it.skip("#Linked List ==> Traverse", function(done) {
		linkedList.printList();
		done();
	});

	it("#Linked List ==> Insertion in front", function(done) {
		linkedList.push(7);
		linkedList.push(1);
		linkedList.push(3);
		linkedList.push(2);
		//linkedList.printList();
		//linkedList.deepPrintList();
		done();
	});

	it.skip("#Linked List ==> Insertion after a node", function(done) {
		linkedList.insertAfter(linkedList.head.next, 5);
		linkedList.printList();
		//linkedList.deepPrintList();
		done();
	});

	it.skip("#Linked List ==> Append a node", function(done) {
		linkedList.append(11);
		linkedList.append(13);
		linkedList.printList();
		linkedList.deepPrintList();
		done();
	});

	it.skip("#Linked List ==> Delete by Key", function(done) {
		linkedList.deleteByKey(7);
		linkedList.deleteByKey(11);
		linkedList.printList();
		linkedList.deepPrintList();
		done();
	});

	it.skip("#Linked List ==> Delete at Position", function(done) {
		linkedList.deleteAtPosition(9);
		linkedList.printList();
		linkedList.deepPrintList();
		done();
	});
	
	it.skip("#Linked List ==> Get Count By Iteration", function(done) {
		linkedList.getCountByIteration();
		done();
	});

	it.skip("#Linked List ==> Get Count By Recursion", function(done) {
		linkedList.getCountByRecursion();
		done();
	});

	it.skip("#Linked List ==> Swapping", function(done) {
		linkedList.swapping(3,11);
		linkedList.printList();
		done();
	});

	it("#Linked List ==> Reverse", function(done) {
		linkedList.printListInOneLine();
		linkedList.reverse();
		linkedList.printListInOneLine();
		done();
	});

});

describe.skip("LinkedList Swap Kth Node From Start and End", function(){
	beforeEach("#LinkedList Clean", function(){
		linkedList = new LinkedList;
		linkedList.append(1);
		linkedList.append(2);
		linkedList.append(3);
		linkedList.append(4);
		linkedList.append(5);
		linkedList.append(6);
		linkedList.append(7);
		linkedList.append(8);
		linkedList.append(9);

	});

	it("#LinkedList Swap", function(done){

		linkedList.printListInOneLine();

		SwapKthNodeFromStartAndEnd.start(3, linkedList);
		linkedList.printListInOneLine();

		SwapKthNodeFromStartAndEnd.start(4, linkedList);
		linkedList.printListInOneLine();

		SwapKthNodeFromStartAndEnd.start(5, linkedList);
		linkedList.printListInOneLine();

		SwapKthNodeFromStartAndEnd.start(6, linkedList);
		linkedList.printListInOneLine();

		SwapKthNodeFromStartAndEnd.start(7, linkedList);
		linkedList.printListInOneLine();

		SwapKthNodeFromStartAndEnd.start(8, linkedList);
		linkedList.printListInOneLine();

		SwapKthNodeFromStartAndEnd.start(10, linkedList);
		linkedList.printListInOneLine();
		done();
	});
});


describe.skip("LinkedList Reverse First K Node", function(){
	beforeEach("#LinkedList Clean", function(){
		linkedList = new LinkedList;
		linkedList.append(1);
		linkedList.append(2);
		linkedList.append(3);
		linkedList.append(4);
		linkedList.append(5);
		linkedList.append(6);
		linkedList.append(7);
		linkedList.append(8);
		linkedList.append(9);

	});

	it("#LinkedList reverse k elements", function(done){

		linkedList.printListInOneLine();

		ReverseLinkedListForFirstKNodes.start(3, linkedList);

		linkedList.printListInOneLine();

		done();
	});
});

describe("LinkedList Reverse Every K Node", function(){
	beforeEach("#LinkedList Clean", function(){
		linkedList = new LinkedList;
		linkedList.append(1);
		linkedList.append(2);
		linkedList.append(3);
		linkedList.append(4);
		linkedList.append(5);
		linkedList.append(6);
		linkedList.append(7);
		linkedList.append(8);
		linkedList.append(9);

	});

	it("#LinkedList reverse Every k elements", function(done){

		linkedList.printListInOneLine();

		ReverseLinkedListForEveryKNodes.start(3, linkedList);

		linkedList.printListInOneLine();

		done();
	});
});