"use strict";

/** Algo for KMP Patttern Search **/
// Initalise i = 0 , j = 0;
// Create LPS Array by calling LPS array method.
// compare str[i] with pat[j]
// check if str[i] === pat[j]
// if yes than check whether j === pat.length
//	if yes than print that pattern found at (i-j), i++,j=0
//	if no i++,j++
// if not than check if j === 0
// 	if yes than i++;
//	if no then j = LPSArray[j-1]

function KMPPatterSearch(str, pat){
	var i,j;
	var LPSArray;

	i = 0;
	j = 0;
	
	if(!pat.length || !str.length){
		return;
	}	

	LPSArray = createLPSArray(pat);	
	while(i < str.length){
		if(str[i] === pat[j]){
			if(j === (pat.length - 1)){
				console.log("Pattern found at " + (i-j))
				i++;
				j = 0;
			} else {
				i++;
				j++;
			}
		} else {
			if(j === 0){
				i++;
			} else {
				j = LPSArray[j-1];
			}
		}
	}
	
}


/*** Algo for creating LPS Array ***/
// Push 0 to the first element of LPS Array as it is always 0
// Initalise j to the 1st character and i to the second character
// check if the element at i is equal to jth element
// if yes than increment j and make LPSArray[i] = j and then increment i
// if no than check if LPS[j] is 0 or not
//	if yes than LPS[i] = 0 and j++, i++;
//      if no than we will find the value at LPS[j-1] and then j will pat[LPS[j-1]] and then we will start matching i and j again as per steps written above.

function createLPSArray(pat){
	var LPSArray = [];
	var i,j;

	LPSArray[0] = 0;
	i = 1;
	j = 0;

	while(i < pat.length){
		if(pat[i] === pat[j]){
			j++;
			LPSArray[i] =  j;
			i++;
		} else {
			if(LPSArray[j] !== 0){
				j = LPSArray[j-1];
			} else {
				LPSArray[i] = 0;
				i++;
			}
		}
	}	
	return LPSArray;
}

(function(){
	var str = process.argv[3] || "ABCABCABCABCABC";
	var pat = process.argv[2] || "ABC";
	KMPPatterSearch(str, pat);
}()); 
