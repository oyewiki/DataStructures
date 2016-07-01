"use strict";

var array = [0,1,2,3,4,5,6,7,8,9];
var valueToSearch = 8;
var binarySearch = require("../Search/BinarySearch");

describe("#Search", function(){
	
	before("#Process user input array", function(){
		
		if(process.argv[4]){
			array = process.argv[4].split(",");
			array = array.map(function(elem){
				return Number(elem);
			});
		}

		if(process.argv[3]){
			valueToSearch = process.argv[3].split("-");
			if(valueToSearch && valueToSearch.length === 2 && Number(valueToSearch[1]) >= 0){
				valueToSearch = Number(valueToSearch[1]);
			}
		}

	});
	
	it("#Binary Search", function(done){
		binarySearch(array, valueToSearch);
		done();
	});
});