"use strict";

function rotate(matrix, n){
	for(var layer = 0; layer < n/2; layer++){
		var first = layer; //0
		var last =  n - 1 - layer; //3

		for(var i = first; i < last; i++){
			var offset = i - first; //0
			
			// save top
			var top = matrix[first][i]; //0,0

			// left -> top
			matrix[first][i] = matrix[last-offset][first]; //0,0 ==> 3,0

			// bottom -> left
			matrix[last-offset][first] = matrix[last][last - offset]; //3,0 ==> 3,3
			
			// right -> bottom
			matrix[last][last - offset] = matrix[i][last]; //3,3 ==> 0,3
			
			// top -> right
			matrix[i][last] = top; //0,3 ==> 0,0
		}
	}
}


(function(){
	var n = process.argv[2] || 4;
	var matrix = [];
	var count = 1;

	for(var i = 0; i< n; i++){
		matrix[i] = [];
		for(var j = 0; j < n; j++){
			matrix[i][j] = count++;
		}
	}

	console.log(matrix);
	rotate(matrix, n);
	console.log(matrix);
}());
