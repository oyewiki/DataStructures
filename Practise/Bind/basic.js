var person = {
	user_details : [{Name: "Ankur Rastogi"},{Name: "Raghav Sharma"}],
	showUserDetails : function(){
		console.log(this.user_details[0].Name);
	}
};

var person1 = {
	user_details : [{Name: "Ankur Sharma"},{Name: "Raghav Rastogi"}]
};


var Ankur = function(cb){
	cb();
}

Ankur(person.showUserDetails.bind(person1));