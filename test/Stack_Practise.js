"use strict";

var InfixToPostfix = require("../Stack/InfixToPostfix");
var infixToPostfix = new InfixToPostfix();

var bracketReversal = require("../Stack/BracketReversal");

describe("#Stack Practise Questions", function(){
	it("#Stack Infix To Postfix", function(done){
		console.log(infixToPostfix.convertToPostFix("4^2*3-3+8/4/(1+1)"));
		done();
	});

	it("#Stack Evaluate Postfix", function(done){
		console.log(infixToPostfix.evaluatePostFix("42^3*3-84/11+/+"));
		done();
	});

	it("#Stack Bracket Reversal Large Count", function(done){
		console.log(bracketReversal("{{{}}{}}{{{{}{{{{}"));
		done();
	});

	it("#Stack Bracket Reversal (First arrow in reverse deirection)", function(done){
		console.log(bracketReversal("}{{{{}"));
		done();
	});

	it("#Stack Bracket Reversal (Improper count)", function(done){
            console.log(bracketReversal("}{}{{{}"));
            done();
    });

});
