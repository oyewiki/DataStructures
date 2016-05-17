"use strict";
var util = require("util");
var debug = require("debug")("Array:BubbleSort");

var Sorting = function(unsortedArray){
	//this.defaultArray = [1,9,2,14,3,8,17,11,4,13,5,7,6,12,19,10];
	this.defaultArray = [1,9,2,14];
	this.unsortedArray = unsortedArray || this.defaultArray;
};

Sorting.prototype.bubbleSort = function(cb){
	var self = this;
	var temp;
	var swap = true;
	var array = self.unsortedArray;
	var j = 0;
	while(swap){
		swap = false;
		for(var i = 0; i< array.length-(j+1); i++){
			if(array[i]> array[i+1]){
				temp = array[i];
				array[i] = array[i+1];
				array[i+1] = temp;
				swap = true;
			}
		}
		j++;
		debug(array);
	}
	cb(null, array);
};

Sorting.prototype.insertionSort = function(cb) {
	var self = this;
	var array = self.unsortedArray;
	var temp;
	for(var i=1; i< array.length; i++){
		for(var j = i; j>0; j--){
			if(array[j] < array[j-1]){
				temp = array[j];
				array[j] = array[j-1];
				array[j-1] = temp;
			}
		}
		debug(array);
	}
	cb(null, array);
};

Sorting.prototype.selectionSort = function(cb){
	var array = this.unsortedArray;
	var temp;
	for(var i=0; i < array.length-1; i++){
		for(var j = i+1; j < array.length;j++){
			if(array[j] < array[i]){
				temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
		}
		debug(array);
	}
	cb(null, array);
};

Sorting.prototype.mergeSort = function(cb){
	var array = this.unsortedArray;
	mergeSort(array, 0, array.length - 1);
	return cb(null, array);
	function mergeSort(array, l, r){
		if(l<r){
			var m = Math.floor((l + r) /2);
			mergeSort(array, l, m);
			mergeSort(array, m+1, r);
			merge(array, l, m, r);
			debug("mergeSort: ",array);
		}
	}

	function merge(array, l, m, r){
		var arr1 = [];
		var arr2 = [];
		var arr3 = [];
		for(var i = l; i <= m; i++){
			arr1.push(array[i]);
		}
		for(var i = m+1; i <= r; i++){
			arr2.push(array[i]);
		}

		debug(arr1, arr2);
		var n1 = m - l + 1;
		var n2 = r - m;
		var i =0;
		var j = 0;
		var k = l;
		while(i < n1 && j < n2){
			if(arr1[i]<arr2[j]){
				array[k] = arr1[i];
				i++;
				k++;
			} else {
				array[k] = arr2[j];
				j++;
				k++;
			}
			debug("inside: ",array);
		}
		while(i < n1){
			array[k] = arr1[i];
			i++;
			k++;
		}

		while(j < n2){
			array[k] = arr2[j];
			j++;
			k++;
		}
	}
};

Sorting.prototype.quickSort = function(cb){
	var array = this.unsortedArray;
	quickSort(array, 0, array.length - 1);
	return cb(null, array);
	function quickSort(array, l, r){
		if(l<r){
			var p = Math.round((Math.random(r))*10);
			quickSort(array, l, p);
			quickSort(array, p+1, r);
			qsort(array, l, p, r);
			debug("quickSort: ",array);
		}
	}

	function qsort(array, l, p, r){
		var arr1 = [];
		var arr2 = [];
		var arr3 = [];
		for(var i = l; i <= p; i++){
			arr1.push(array[i]);
		}
		for(var i = p+1; i <= r; i++){
			arr2.push(array[i]);
		}

		 debug(arr1, arr2);
	}
};

module.exports = Sorting;