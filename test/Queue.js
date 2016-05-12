"use strict";

var Queue = require("../Queue/Queue");
var queue = new Queue();

describe("Queue", function(){

	before("Create some initial Queue", function(){
		queue.enqueue(2);
		queue.enqueue(10);
		queue.enqueue(6);
	});

	it.skip("Print the initiall Queue", function(done){
		queue.print();
		done();
	});

	it("Enqueue Two items", function(done){
		queue.enqueue(14);
		queue.enqueue(9);
		queue.print();
		done();
	});

	it("Dequeue Two items", function(done){
		queue.dequeue();
		queue.dequeue();
		queue.print();
		done();
	});

	it("Dequeue and make queue empty and then Enqueue an element", function(done){
		queue.dequeue();
		queue.dequeue();
		queue.dequeue();
		queue.dequeue();
		queue.enqueue(3);
		queue.enqueue(17);
		queue.enqueue(19);
		queue.print();
		done();
	});

});