"use strict";

var Graph = require("../Graph");
var BFSTraversal = require("../Graph/BFSTraversal");
var DFSTraversal = require("../Graph/DFSTraversal");
var DirectedGraph = require("../Graph/DirectedGraph")
var DetectCycleInDirectedGraph = require("../Graph/DetectCycleInDirectedGraph");
var graph, directedGraph;

describe("#Graph Undirected - Basic Operations", function(){
	
	before("#Graph Undirected - init", function(){
		graph = new Graph(5);
		graph.addEdge(0, 1);
	    graph.addEdge(0, 4);
	    graph.addEdge(1, 2);
	    graph.addEdge(1, 3);
	    graph.addEdge(1, 4);
	    graph.addEdge(2, 3);
	    graph.addEdge(3, 4);

	    directedGraph = new DirectedGraph(4);
	    directedGraph.addEdge(0, 1);
	    directedGraph.addEdge(0, 2);
	    directedGraph.addEdge(1, 2);
	    directedGraph.addEdge(2, 0);
	    directedGraph.addEdge(2, 3);
	    directedGraph.addEdge(3, 3);
	});

	it("#Graph Undirected - print", function(done){
		graph.print();
		done();
	});

	it("#Graph Directed - print", function(done){
		directedGraph.print();
		done();
	});

	it("#Graph BFSTraversal", function(done){
		var bfsTraversal = new BFSTraversal(graph);
		bfsTraversal.startTraversing(2);
		done();
	});

	it("#Graph DFSTraversal", function(done){
		var dfsTraversal = new DFSTraversal(graph);
		dfsTraversal.startTraversing(2);
		done();
	});

	it("#Graph BFSTraversal Directed", function(done){
		var bfsTraversal = new BFSTraversal(directedGraph);
		bfsTraversal.startTraversing(2);
		done();
	});

	it("#Graph DFSTraversal Directed", function(done){
		var dfsTraversal = new DFSTraversal(directedGraph);
		dfsTraversal.startTraversing(2);
		done();
	});

	it("#Graph Detect Cycle In Directed Graph", function(done){
		var detectCycleInDirectedGraph = new DetectCycleInDirectedGraph(directedGraph);
		console.log(detectCycleInDirectedGraph.detectCycle());
		done();
	});

	it("#Graph Detect Cycle In Undirected Graph", function(done){
		var detectCycleInUndirectedGraph = new DetectCycleInUndirectedGraph(directedGraph);
		console.log(detectCycleInUndirectedGraph.detectCycle());
		done();
	});
});