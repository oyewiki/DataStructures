"use strict";

//Here we will check if one string is permutation of another.
//For this we will sort both the strings and than will compare them.


function sort(str){
	str = str.split("");
	return str.sort().join("");
}

function compare(str1, str2){
	
	if(typeof str1 !== 'string' || typeof str2 !== 'string'){
		return console.log("Either one or both the input are not string");
	}

	if(str1.length !== str2.length){
		return console.log("Length of both the strings dont match");
	}

	if(sort(str1) === sort(str2)){
		return console.log("Yes srings are permutation of each other");
	}
	
	return console.log("No strings are not permutaion of each other");
}


(function(){
	var str1 = process.argv[2] || 'abcd';
	var str2 = process.argv[3] || 'dcba';
	compare(str1, str2);
}());
