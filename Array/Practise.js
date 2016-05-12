"use strict";

var Practise = function(){

}

Practise.prototype.searchInRotatedSortedArray = function(array, noToSearch) {
	var arr = array || [9,10,11,13,17,19,1,3,4,5,7,8];
	var no = noToSearch;

	if(no === undefined){
		return new Error("No number to search");
	}

	function search(arr, l, r){
		var m = (l + r -1)/2;
	}
};