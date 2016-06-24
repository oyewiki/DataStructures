"use strict";

function generateExample() {
  var array = new Array('A', 'B', 'C','D');
  generate(array.length, array);
}

function generate(n, array) {
  if(n === 1) {
    console.log("------------------------\n",array.join(' '),"\n-----------------------------");
  } else {
    for(var i = 0; i < n - 1; i++) {
      console.log("In Mid",array);
      generate(n - 1, array);
      if(n % 2 === 0) {
        array = swap(i, n - 1, array);
      } else {
        array = swap(0, n - 1, array);
      }
    }
    //generate(n - 1, array);
  }
}

function swap(i, j, array) {
  var tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
  return array;
}

generateExample();