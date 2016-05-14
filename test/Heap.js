"use strict";

var Heap = require("../Heap");
var h = new Heap();

describe("#Heap Basic Operations", function(){

	it("#Heap add and delete keys", function(done){
	    h.insertKey(3);
	    h.insertKey(2);
	    h.deleteKey(1);
	    h.insertKey(15);
	    h.insertKey(5);
	    h.insertKey(4);
	    h.insertKey(45);
	    console.log(h.extractMin() + " " + h.getMin() + " ");
	    h.decreaseKey(2, 1);
	    console.log(h.getMin());
	    done();
	});
});