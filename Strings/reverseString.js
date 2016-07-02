
"use strict";

//Take string as array
//Find the middle value suppose 10/2 5 and 9/2 4.5 4

function swap(str, i, j){
	var temp = str[i];
	str[i] = str[j];
	str[j] = temp;
	return str;
}

function reverse(str){
	var count = str.length;
	var loopEnd = (count%2 === 0) ? count/2 : Math.ceil(count/2);	
	str = str.split("");

	for(var i = 0; i< loopEnd; i++){
		str = swap(str, i, count-i);
	}

return str;
}

(function(){
	var str = process.argv[2] || "This is my home.";
	str = reverse(str);
	console.log(str.join(""));
}());
