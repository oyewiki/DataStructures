"use strict";

var Graph = require("../Graph");
var graph;

describe("#Graph Undirected - Basic Operations", function(){
	
	before("#Graph Undirected - init", function(){
		graph = new Graph(5);
	});

	it("#Graph Undirected - print", function(done){
		graph.addEdge(0, 1);
	    graph.addEdge(0, 4);
	    graph.addEdge(1, 2);
	    graph.addEdge(1, 3);
	    graph.addEdge(1, 4);
	    graph.addEdge(2, 3);
	    graph.addEdge(3, 4);
		graph.print();
		done();
	});
});