"use strict";

var Queue = require("../Queue");

var util = require("util");

var NBinaryNumber = function(n){
	var queue = new Queue();
	queue.enqueue(1);
	while(n--){
		var item = queue.dequeue();
		util.log(item.toString());
		queue.enqueue(item + "0");
		queue.enqueue(item + "1");
	}
}

module.exports = NBinaryNumber;