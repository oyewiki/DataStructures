"use strict";

var debug = require("debug")("Binary-Search");

function binarySearch(array, start, end, k){

	debug(array, start, end);

	var n = Math.floor((end - start)/2) + start;

	if(k === array[n]){
		return n;
	}

	if(end-start === 0){
		return;
	}
	
	if(k < array[n]){
		return binarySearch(array, start, n-1, k);
	}

	if(k > array[n]){
		return binarySearch(array, n+1, end, k);
	}
}

module.exports = function(array, k){

	if(!array.length) return console.log("Empty array provided!!!");
	
	var start = 0;
	var end = array.length-1;

	var index = binarySearch(array, start, end, k);

	if( index >= 0){
		return console.log(k + " is present at " + index + " in input array.");
	}

	return console.log(k + " is not present in input array.");
};