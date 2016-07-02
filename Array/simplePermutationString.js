"use strict";

function swap(str, i, j){
	var temp = '';
	
	temp = str[i];
	str[i] = str[j];
	str[j] = temp;

	return str;
}

function permute(str, l, r){
	if(l === r) {
		console.log(str);	
	} else {
		for(var i = l; i < r; i++){
			str = swap(str, l, i);
			permute(str, l + 1, r);
			str = swap(str, l, i);
		}
	}
}

(function(){
	var str = process.argv[2] || 'ABC';
	var l = 0;
	var r = str.length;
	
	str = str.split("");
	permute(str, l, r);
}());
