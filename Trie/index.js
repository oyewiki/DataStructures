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

/**
 * [delete description]
 * @param  {[type]} word [description]
 * @return {[type]}      [description]
 *
 * * Algo
 * This contains 4 cases 
 * 1. Key may not be there in trie. Delete operation should not modify trie.
 * 2. Key present as unique key (no part of key contains another key (prefix), nor the key itself is prefix of another key in trie). Delete all the nodes.
 * 3. Key is prefix key of another long key in trie. Unmark the leaf node.
 * 4. Key present in trie, having atleast one other key as prefix key. Delete nodes from end of key until first leaf node of longest prefix key.
 *
 */
Trie.prototype.delete = function(word){
	var count = 0;
	var isLastChar;
	var char;
	var currentNode = this.root.childrens;
	// console.log(currentNode, word[count]);
	iterate(word[count], false);

	function iterate(char, isLeafNode){
		// console.log(currentNode, char, currentNode[char], isLeafNode);
		if(!currentNode[char] || (isLeafNode)) return;
		currentNode = currentNode[char].childrens;
		isLeafNode = (count === word.length - 1) ? true : false;
		iterate(word[++count],isLeafNode);
		console.log(char);
	}
};


Trie.prototype.print = function(){
	console.log(this.root);
};

module.exports = Trie;