var gameController = {
	scores : [20, 34, 55, 46, 77],
	avgScores : null, 
	players : [
	{name:"Tommy", playerID:987, age:23},
	{name:"Pau", playerID:87, age:33}
	]
};

var appController = {
	scores : [900, 845, 809, 950],
	avgScores : null,
	avg : function(){
		var sumOfScores = this.scores.reduce (function (prev, cur, index, array) {
			return prev + cur;
		});

		this.avgScores = sumOfScores / this.scores.length;
	}

};

appController.avg();

console.log(appController.avgScores, gameController.avgScores);

appController.avg.apply(gameController);

console.log(appController.avgScores, gameController.avgScores);