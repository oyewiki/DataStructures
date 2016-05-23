"use strict";

var Graph = require("../Graph");
var BFSTraversal = require("../Graph/BFSTraversal");
var graph;

describe("#Graph Undirected - Basic Operations", function(){
	
	before("#Graph Undirected - init", function(){
		// graph = new Graph(5);
		// graph.addEdge(0, 1);
	 //    graph.addEdge(0, 4);
	 //    graph.addEdge(1, 2);
	 //    graph.addEdge(1, 3);
	 //    graph.addEdge(1, 4);
	 //    graph.addEdge(2, 3);
	 //    graph.addEdge(3, 4);
	 	graph = new Graph(4);
		graph.addEdge(0, 1);
	    graph.addEdge(0, 2);
	    graph.addEdge(1, 2);
	    graph.addEdge(2, 0);
	    graph.addEdge(2, 3);
	    graph.addEdge(3, 3);
	});

	it("#Graph Undirected - print", function(done){
		graph.print();
		done();
	});

	it("#Graph BFSTraversal", function(done){
		var bfsTraversal = new BFSTraversal(graph);
		bfsTraversal.stratTraversing(2);
		done();
	});
});