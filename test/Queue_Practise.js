"use strict";

var NBinaryNumber = require("../Queue/NBinaryNumber");

describe("Queue Practise Questions", function(){
	
	it("Print Binary Numbers Till 5", function(done){
		new NBinaryNumber(5);
		done();
	});

	it("Print Binary Numbers Till 10", function(done){
		new NBinaryNumber(10);
		done();
	});

});