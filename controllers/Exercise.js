const Exercise = require("../models/Exercise");
const Day = require("../models/Day");

module.exports = {
	addExercise: function(req, res) {
		console.log(req.session.dayId);
		let newExercise = new Exercise(req.body);

		newExercise.save().catch(err => {
			console.log(err);
			res.status(400).json({
				msg: "There was a problem saving your exercise please try again later."
			});
		});
	}
};
