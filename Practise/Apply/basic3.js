"use strict";

var clientData = {
	firstName : "Ankur",
	lastName : "Rastogi",
	fullName : null,
	setUserName : function(firstName, lastName){
		this.fullName =  firstName + " " + lastName;

		console.log(this.fullName);
	}
};


clientData.setUserName(clientData.firstName, clientData.lastName);


function createUserName(firstName, lastName, callback, callbackObj){
	callback.apply(callbackObj, [firstName, lastName]);
}


createUserName("Amit", "Kumar", clientData.setUserName, clientData);