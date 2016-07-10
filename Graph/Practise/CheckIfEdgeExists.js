"use strict";

var DirectedGraph = require("../DirectedGraph");
var util = require("util");

var CheckIfEdgeExists = function(graph){
	this.graph = graph;
};

CheckIfEdgeExists.prototype.traverse = function(u,v){
	
	if(!this.graph || !this.graph.adjArray || !util.isArray(this.graph.adjArray)) return false;

	var adjArray = this.graph.adjArray;
	var visited = [];
	
	//Populate visited array
	for(var i = 0; i < adjArray.length; i++){
		visited[i] = false;
	}


	//check if u, v are out of adjArray
	if(u >= adjArray.length || v >= adjArray.length) {
		return false;
	}

	var edgePresent = false;

	iterate(u);

	return edgePresent;

	function iterate(vertice){
		
		if(visited[vertice]){
			return;
		}

		visited[vertice] = true;

		var adjList = adjArray[vertice].head;

		while(adjList !== null){
			if(adjList.value === v){
				edgePresent = true;
				return;
			}
			iterate(adjList.value);
			adjList = adjList.next;
		}

	}
};

module.exports = CheckIfEdgeExists;

(function(){
	var directedGraph = new DirectedGraph(4);
	directedGraph.addEdge(0, 1);
	directedGraph.addEdge(0, 2);
	directedGraph.addEdge(1, 2);
	directedGraph.addEdge(2, 0);
	directedGraph.addEdge(2, 3);
	directedGraph.addEdge(3, 3);

	var checkIfEdgeExists = new CheckIfEdgeExists(directedGraph);
	console.log(checkIfEdgeExists.traverse(3,2));
	console.log(checkIfEdgeExists.traverse(3,4));
	console.log(checkIfEdgeExists.traverse(0,3));
	console.log(checkIfEdgeExists.traverse(3,3));
}());
