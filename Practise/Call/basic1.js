var arrayLikeObj = {
	0: 'Ankur',
	1: 'Amit',
	2: 'Ashish',
	3: 'Ram',
	length: 4
};

var newArray = Array.prototype.slice.call(arrayLikeObj,0);

console.log(newArray);

console.log(newArray.length);

console.log(Array.prototype.indexOf.call(arrayLikeObj,'Amit'));

console.log(Array.prototype.reverse.call(arrayLikeObj));

console.log(Array.prototype.pop.call(arrayLikeObj));

console.log(Array.prototype.push.call(arrayLikeObj, "Anand"));

console.log(Array.prototype.push.call(arrayLikeObj, "Haani"));

console.log(arrayLikeObj);