"use strict";

//Reference to Queue Class
var Queue = require("../Queue");

var util = require("util");

var NBinaryNumber = function(n){
	//Initialize the empty Queue
	var queue = new Queue();

	//Enqueue element 1
	queue.enqueue(1);

	//Run a loop for n times
	while(n--){
		//dequeue an element
		var item = queue.dequeue();
		//print it
		util.log(item.toString());

		//Append first 0 and then 1 to a number and enqueue them in Queue.
		queue.enqueue(item + "0");
		queue.enqueue(item + "1");
	}
}

module.exports = NBinaryNumber;