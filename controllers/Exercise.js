const Exercise = require("../models/Exercise");
const Day = require("../models/Day");

module.exports = {
	addExercise: function(req, res) {
		let newExercise = new Exercise(req.body);

		newExercise
			.save()
			.then(exercise => {
				Day.findById(req.session.dayId)
					.then(day => {
						day.exercises.push(exercise._id);
						day
							.save()
							.then(day => {
								return res.status(201).json(exercise);
							})
							.catch(err => {
								console.log(err);
								return res.status(400).json({
									msg:
										"There was a problem updating the day in the database please try again later."
								});
							});
					})
					.catch(err => {
						console.log(err);
						return res.status(400).json({
							msg:
								"There was a problem find the day in the database, please try again later."
						});
					});
			})
			.catch(err => {
				console.log(err);
				return res.status(400).json({
					msg:
						"There was a problem saving your exercise please try again later."
				});
			});
	}
};
