"use strict";

var LinkedList = require("../LinkedList/LinkedList");

var DirectedGraph = function(v){
	this.vertices = v;
	this.adjArray = [];
	for(var i = 0; i < v; i++){
		this.adjArray[i] = new LinkedList();
	}
}


DirectedGraph.prototype.print = function(){
	console.log("No of Vertices : " + this.adjArray.length);
	this.adjArray.forEach(function(elem, index, array){
		console.log("Adjacency list of vertex " + index);
		elem.printListInOneLine();
	});
}

DirectedGraph.prototype.addEdge = function(u,v){
	this.adjArray[u].push(v);
};

module.exports = DirectedGraph;