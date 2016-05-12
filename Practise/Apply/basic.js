var person = {
	firstName : "Ankur",
	lastName : "Rastogi",
	showFullName : function(){
		console.log(this.firstName + " " + this.lastName);
	}
};

person.showFullName();

var anotherPerson = {
	firstName : "Amit",
	lastName : "Kumar"
};

person.showFullName.apply(anotherPerson);