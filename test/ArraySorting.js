"use strict";

var Sorting = require("../Array/Sorting");
var sorting = new Sorting();

describe("ArraySorting", function(){
	it("#BubbleSort", function(done){
		sorting.bubbleSort(function(err, result){
			if(err){
				return done(err);
			}
			console.log(result);
			done();
		});
	});

	it("#InsertionSort", function(done){
		sorting.insertionSort(function(err, result){
			if(err){
				return done(err);
			}
			console.log(result);
			done();
		});
	});

	it("#SelectionSort", function(done){
		sorting.selectionSort(function(err, result){
			if(err){
				return done(err);
			}
			console.log(result);
			done();
		});
	});

	it("#MergeSort", function(done){
		sorting.mergeSort(function(err, result){
			if(err){
				return done(err);
			}
			console.log(result);
			done();
		});
	});
	
	it("#QuickSort", function(done){
		sorting.quickSort(function(err, result){
			if(err){
				return done(err);
			}
			console.log(result);
			done();
		});
	});
});