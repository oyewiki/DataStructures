var util = require('util');
var root = {};
var array = ['A', 'B', 'C','D','E','F','G','H','I'];
var count = 0;

var Node = function(value) {
    this.value = value;
    this.childrens = [];
}

var em1 = new Date();

populate(root, array);

function populate(node, array) {
    for (var i = 0; i < array.length; i++) {
        var arr = JSON.parse(JSON.stringify(array));
        arr.splice(i, 1);
        if(!node[array[i]]) {
            console.log(array[i]);
            node[array[i]] = {};
            populate(node[array[i]], arr);
        }
    }
}

console.log(root);

if(Object.keys(root) && Object.keys(root).length){
    if(Object.keys(root) && Object.keys(root).length) {
            Object.keys(root).forEach(function(l){
            print(root[l], l);
        });
    }
}

function print(node, letter){
    if(Object.keys(node) && Object.keys(node).length) {
            Object.keys(node).forEach(function(l){
            print(node[l], letter + l);
        });
    } else {
        count ++;
        console.log(letter);
    }
}

var em2 = new Date();

console.log("Total permutations : " + count);

console.log(em2-em1);