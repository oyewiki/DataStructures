"use strict";

var Stack = require("../");

function isOperand(ch){
	return ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <='Z') || (ch >= '1' && ch <= 9));
}

function prec(ch){
	switch(ch){
		case '+' : 
		case '-' : 
			return 1;
		case '*' : 
		case '/' : 
			return 2;
		case '^' : 
			return 3;
		default :
			return -1;
	}
}

	//loop on each character of infixStr
	//check whether operand or not
		//if Yes
		// add that to postfixe string
		//If Not
		// check if the top element of stack has more prec with the current operand
			//If yes
			//thank push it to postfix string
			//If not 
			//than push current operand to stack
		//repeat last step 
		//operand is (
			//if yess
			//than push it to stack
		//if operand is )
			//if yes
			//push all the operand in the stack to postfix string till we get (

function convertPostFix(infixStr){
	var count =0;
	var postfixStr = "";
	var stack = new Stack();

	//loop through the length of the infix string
	while(count < infixStr.length){
		//check of it is operand or not
		if(isOperand(infixStr[count])) {
			postfixStr += infixStr[count];
		} else {
			//if operator is other than ( )
			if(infixStr[count] !== '(' && infixStr[count] !== ")"){
				while(!stack.isEmpty()){
					//Till the time stack's top operator greater than equal to infixStr operator than add to postfixStr else break
					if(prec(stack.peek()) >= prec(infixStr[count])){
						postfixStr += stack.pop();
					} else {
						break;
					}
				}
				//push the current infixStr operator to stack
				stack.push(infixStr[count]);
			} else {
				//if infixStr operator is ( than simply push it to stack
				if(infixStr[count] === "("){
					stack.push(infixStr[count]);
				} else {
					//if infixStr operator is ) than push all the elements from stack to postfixStr till we get ( from stack
					while(stack.peek() !== '('){
						postfixStr += stack.pop();
					}
					stack.pop();
				}
			}
			
		}
		count++;
	}

	//Adding the rest of the operand in stack to postfix string
	while(!stack.isEmpty()){
		postfixStr += stack.pop();
	}
	console.log(postfixStr);
}

var InfixToPostfix = function(infixStr){
	return convertPostFix(infixStr);
}

module.exports = InfixToPostfix;

(function(){
	if(require.main === module){
		// console.log(isOperand('A'));
		// console.log(isOperand('1'));
		// console.log(isOperand('+'));
		// console.log(prec('a'));
		// console.log(prec('*'));
		InfixToPostfix("4^2*3-3+8/4/(1+1)");
		//InfixToPostfix("a+b*c+d");
	}
}());