"use strict";

var util = require("util");

var DFSTraversal = function(graph){
	this.graph = graph;
	this.visited = [];
}

/**
 * [startTraversing description]
 * @param  {[type]} v [description]
 * @return {[type]}   [description]
 */
DFSTraversal.prototype.startTraversing = function(v){
	var self = this;

	if(!this.graph || !util.isArray(this.graph.adjArray) || !this.graph.adjArray.indexOf(v) < 0) {
		return util.log("Graph is not having the desired vertices.");
	}

	iterate(v);

	function iterate(vertice){
		console.log(vertice);
		self.visited.push(vertice);

		var n = self.graph.adjArray[vertice].head;

		while(n !== null){
			if(n.value !== undefined && self.visited.indexOf(n.value) < 0){
				iterate(n.value);
			}
			n = n.next;
		}
	}
};

module.exports = DFSTraversal;