var friends = require('../data/friends.js');

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});

	//This function adds a new user
	//Req.body is the incoming survey data.
	app.post('/api/friends', function(req, res){

		var newFriend = req.body;
		friends.push(newFriend);

		var totalDifference = 0;
		var allDifferences = [];

		for (var i=0; i<(friends.length-1); i++){

			//Looop through all of question values and sum total their subtracted absolute values
			for (var j=0; j<10; j++){
				totalDifference += Math.abs(friends[i].scores[j] - newFriend.scores[j]);
			}

			allDifferences.push(totalDifference);
			totalDifference = 0;
		}

		console.log(totalDifference);
		console.log(allDifferences);
	});

}