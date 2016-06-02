"use strict";

var Trie = require("../Trie");
var trie = new Trie();

var util = require("util");

describe("#Trie Basic Implementation", function(){
	it("#Trie Insertion", function(done){
		trie.insert("abcd");
		trie.insert("afg");
		trie.insert("axyz");
		trie.insert("abyz");
		//trie.print();
		done();
	});

	it.skip("#Trie Search", function(done){
		util.log("abcd - " + (trie.search("abcd")? "Present in trie" : "Not present in trie"));
		util.log("abf - " + (trie.search("abf")? "Present in trie" : "Not present in trie"));
		util.log("afg - " + (trie.search("afg")? "Present in trie" : "Not present in trie"));
		util.log("abyz - " + (trie.search("abyz")? "Present in trie" : "Not present in trie"));
		util.log("abyza - " + (trie.search("abyza")? "Present in trie" : "Not present in trie"));
		done();
	});


	it("#Trie Delete", function(done){
		trie.delete("abcd");
		done();
	});
});