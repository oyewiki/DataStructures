"use strict";

//var Vertices = require("../LinkedList/LListNode");
var LinkedList = require("../LinkedList/LinkedList");

var Graph = function(v){
	this.vertices = v;
	this.adjArray = [];
	for(var i = 0; i < v; i++){
		this.adjArray[i] = new LinkedList();
	}
}


Graph.prototype.print = function(){
	console.log("No of Vertices : " + this.adjArray.length);
	this.adjArray.forEach(function(elem, index, array){
		console.log("Adjacency list of vertex " + index);
		//console.log(elem);
		elem.printListInOneLine();
	});
}

Graph.prototype.addEdge = function(u,v){
	this.adjArray[u].push(v);

	this.adjArray[v].push(u);
};

module.exports = Graph;