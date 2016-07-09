"use strict";
var util = require("util");
var debug = require("debug")("Array:BubbleSort");

var Sorting = function(unsortedArray){
	this.defaultArray = [1,9,2,14,3,8,17,11,4,13,5,7,6,12,19,10];
	//this.defaultArray = [1,9,2,14,3,8,17,11];
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
	var min;

	for(var i = 0; i < array.length - 1; i++){
		min = i;
		for(var j = i+1; j< array.length; j++){
			if(array[j]< array[min]){
				min = j;
			}
		}

		if(min != i){
			array = swap(array, i, min);
		}

	}
		
	cb(null, array);
};

Sorting.prototype.mergeSort = function(cb){
	var array = this.defaultArray;
	
	mSort(array, 0, array.length - 1);
	
	cb(null, array);	

	function mSort(array, l, r){
		if(l < r){
			var p = Math.floor((l + r)/2);
			
			console.log(l, r);
	
			mSort(array, l,p);
			mSort(array,p+1, r);
			merge(array, l, p, r);
		}
	}	

	function merge(array, l, p, r){
		var arr1 = [];
		var arr2 = [];
		
		var i,j,k;	

		for(i = l; i <= p; i++){
			arr1.push(array[i]);
		}

		for(i = p+1; i <= r; i++){
			arr2.push(array[i]);
		}

		//console.log(arr1, arr2);
		
		i = 0; j = 0; k = l;

		while(i < arr1.length && j < arr2.length){
			if(arr1[i] < arr2[j]){
				array[k++] = arr1[i++];
			} else {
				array[k++] = arr2[j++];
			}
		}

		while(i < arr1.length){
			array[k++] = arr1[i++];
		}

		while(j < arr2.length){
			array[k++] = arr2[j++];
		}
		
	}
};

Sorting.prototype.quickSort = function(cb){
	var array = this.unsortedArray;
	var pivot;

	qSort(array, 0, array.length - 1);

	cb(null, array);

	function qSort(array, l, r){
		if(l < r){
			pivot = processArray(array, l, r);
			qSort(array, l, pivot-1);
			qSort(array, pivot + 1, r);		
		}
	}

	function processArray(array, l, r){
		var p = r;
		var i = l;
		for(var j = l; j < r; j++){
			
			if(array[j] < array[p]){
				array = swap(array, i, j);
				i++;
			}
		}
		
		array = swap(array, i, p);
		p = i;	
		return p;
	}
	
};

module.exports = Sorting;
