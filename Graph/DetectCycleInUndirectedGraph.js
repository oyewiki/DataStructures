"use strict";

var util = require("util");

var DetectCycleInDUndirectedGraph = function(graph){
	this.graph = graph;
	this.visited = [];
	this.recStack = [];
	this.verticeCount = this.graph.adjArray.length;
	for(var i = 0; i < this.verticeCount-1; i++){
		this.visited[i] = false;
		this.recStack[i] = false;
	}
};


DetectCycleInUndirectedGraph.prototype.detectCycle = function(){
	if(!this.graph || !util.isArray(this.graph.adjArray)) {
		return util.log("Graph is not having the proper structure.");
	}

	var self = this;

	for(var i = 0; i < this.verticeCount-1; i++){
		if(iterate(i))
			return true;
	}
	return false;

	function iterate(v){

		if(!self.visited[v]){
			self.visited[v] = true;
			self.recStack[v] = true;

			var n = self.graph.adjArray[v].head;

			while(n !== null){
				if(!self.visited[n.value] && iterate(n.value)){
					return true;
				} else if(self.recStack[n.value]) {
					return true;
				}
				n = n.next;
			}
		}
		self.recStack[v] = false;
		return false;
	}
};

module.exports = DetectCycleInUndirectedGraph;