"use strict";

var Node = require("./TrieNode");

var Trie = function(){
	this.root = new Node();
};


/**
 * [insert Insert a word in trie structure]
 * @param  {[string]} word [A word that needs to be inserted]
 * @return {[type]}      [A Json reponse depicting success or failure]
 *
 * * Algo
 * Take count as word length
 * Apply While Loop for the count
 * call insertChar method for each character in while loop
 *
 * InsertChar method will check if the character exists or not
 * If yes than take the refernce of that node
 * If no than insert the node.
 */

Trie.prototype.insert = function(word){
	var count = 0;
	var node = this.root;
	var isLeaf;

	while(count < word.length){
		isLeaf = (count === word.length-1) ? true : false;
		insertChar(word[count++], isLeaf);
	}

	function insertChar(char, isLeaf){
		if(!node.childrens[char]){
			node.childrens[char] = new Node();
		}
		node.childrens[char].isLeaf = isLeaf;
		node = node.childrens[char];
	}
};

/**
 * * Trie Search Method
 * @param  {string} word [A word that needs to be searched.]
 * @return {[type]}      [description]
 */
Trie.prototype.search = function(word){
	var count = 0;
	var node = this.root;
	var isLastChar;

	while(count < word.length){
		isLastChar = (count === word.length - 1) ? true : false;
		if(!searchChar(word[count++], isLastChar)) {
			return false;
		}
	}

	return true;

	function searchChar(char, isLastChar){
		if(!node.childrens[char] || (isLastChar && !node.childrens[char].isLeaf)) {
			return false;
		} else {
			node = node.childrens[char];
			return true;
		}
	}
};

Trie.prototype.delete = function(){};

Trie.prototype.print = function(){
	console.log(this.root);
};

module.exports = Trie;