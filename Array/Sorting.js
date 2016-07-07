"use strict";
var util = require("util");
var debug = require("debug")("Array:BubbleSort");

var Sorting = function(unsortedArray){
	this.defaultArray = [1,9,2,14,3,8,17,11,4,13,5,7,6,12,19,10];
	//this.defaultArray = [1,9,2,14];
	this.unsortedArray = unsortedArray || this.defaultArray;
};

var swap = function(array, m, n){
	var temp = array[m];
	array[m] = array[n];
	array[n] = temp;
	return array;
};

Sorting.prototype.bubbleSort = function(cb){
	
	var temp;
	var self = this;
	var isSwapReqred = true;
	var array = self.unsortedArray;
	
	while(isSwapReqred){
		
		isSwapReqred = false;
		
		for(var i = 0; i< array.length-(j+1); i++){
		
			if(array[i]> array[i+1]){

				swap(array, i, i+1);
				isSwapReqred = true;

			}
		}

		debug(array);
	}

	cb(null, array);
};


Sorting.prototype.insertionSort = function(cb) {

	var array = this.defaultArray;
	var temp,j;

	for(var i = 1; i < array.length; i++){
		j = i-1;
		temp = array[i];
		while(array[j] > temp && j>= 0){
			array[j+1] = array[j];
			j--;
		}
		array[j+1] = temp;
	}
	
	cb(null,array);
	
};


//Selection Sort
Sorting.prototype.selectionSort = function(cb){
	var array = this.unsortedArray;
	var temp;
	
	for(var i=0; i < array.length-1; i++){
		
		for(var j = i+1; j < array.length;j++){
			
			if(array[j] < array[i]){
				swap(array, i, j);
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
