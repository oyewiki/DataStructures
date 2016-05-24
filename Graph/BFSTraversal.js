"use strict";

//Internal Modules
var Queue = require("../Queue/Queue")

//Node Gloabl Modules
var util = require("util");

var BFSTraversal = function(graph){
	this.visited = [];
	this.queue = new Queue();
	this.graph = graph;
};

/** * Algo For BFSTraversal
 * 
 * Start from the starting vertices passed in 
 * Put that vertices in visited Array
 * Find all the adjacent vertices of that vertices and enqueue them in a queue.
 * 		* Dequeue a vertice from queue
 *		* Push this vertice in visited Array.
 *		* Find all its adjacent vertices by traversing its adjacencey list
 *		* Enqueue all the adjacent vertices in queue.
 *		* Repeat all above steps untill all vertices a traversed
 */


BFSTraversal.prototype.startTraversing = function(vertice){
	if(!this.graph || !util.isArray(this.graph.adjArray) || !this.graph.adjArray.indexOf(vertice)) {
		return util.log("Graph is not having the desired vertices.");
	}

	//Push first element in the group
	this.queue.enqueue(vertice);
	this.visited.push(vertice);

	//While look till the queue gets empty
	while(!this.queue.isEmpty()){
		
		var item = this.queue.dequeue();

		//console.log the vertice
		console.log(item);
		
		//Take the head of the list of vertices attached
		var n = this.graph.adjArray[item].head;
		
		//Loop while we enqueue all the adjacent vertices.
		while(n !== null){
			if(n.value != null && this.visited.indexOf(n.value) < 0){
				this.queue.enqueue(n.value);
				this.visited.push(n.value);
			}
			n = n.next;
		}
	}
};

module.exports = BFSTraversal;

