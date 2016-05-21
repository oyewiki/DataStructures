"use strict";

/**
 *
 *	//Algo
 *		//loop on each character of infixStr
 *		//check whether operand or not
 *			//if Yes
 *			// add that to postfixe string
 *			//If Not
 *			// check if the top element of stack has more prec with the current operand
 *				//If yes
 *				//thank push it to postfix string
 *				//If not 
 *				//than push current operand to stack
 *			//repeat last step 
 *			//operand is (
 *				//if yess
 *				//than push it to stack
 *			//if operand is )
 *				//if yes
 *				//push all the operand in the stack to postfix string till we get (
 *
 */

//Requireing Stack class
var Stack = require("../");

//To check whether element is operand or not
function isOperand(ch){
	return ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <='Z') || (ch >= '1' && ch <= 9));
}

//Return the precedence of the operator
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

//Function to convert Infix to Postfix
function convertPostFix(infixStr, stack){
	var count =0;
	var postfixStr = "";
	

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
	return postfixStr;
}


//Function to evaluate Postfix
function evaluatePostFix(postfixStr, stack){
	var count = 0;

	//Loop while count is less than postfix string length
	while(count < postfixStr.length){
		//check whether element is operand or not
		if(isOperand(postfixStr[count])){
			//push element to stack
			stack.push(postfixStr[count]);
		} else {
			if(stack.size() < 2){
				console.log("Improper postfix");
				break;
			}
			//Pop top two elements from stack
			var operand2 = stack.pop();
			var operand1 = stack.pop();
			//Evaluate operand1 operator and operand2
			operand1 = eval(operand1 + postfixStr[count] + operand2);
			console.log(operand1);
			//Push result operand1 back to stack
			stack.push(operand1);
		}
		//Increment the counter
		count ++;
	}
	//Last element is the result of the evalution pop it and return to give result.
	return stack.pop();
}

// InfixToPostfix Class Creation
var InfixToPostfix = function(){
	
}

//Method to convert infix to postfix
InfixToPostfix.prototype.convertToPostFix = function(infixStr){
	var stack = new Stack();
	return convertPostFix(infixStr, stack);
}

//Method to evaluate postfix
InfixToPostfix.prototype.evaluatePostFix = function(postfix){
	var stack = new Stack();
	return evaluatePostFix(postfix, stack);
}

module.exports = InfixToPostfix;