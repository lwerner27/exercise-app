const Exercise = require("../models/Exercise");

module.exports = {
	addExercise: function(req, res) {
		let newExercise = new Exercise(req.body);

		newExercise
			.save()
			.then(exercise => {
				return res.status(201).json(exercise);
			})
			.catch(err => {
				console.log(err);
				res.status(400).json({
					msg:
						"There was a problem saving your exercise please try again later."
				});
			});
	}
};
