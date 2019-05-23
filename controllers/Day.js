const Day = require("../models/Day");

module.exports = {
	createDay: function(req, res) {
		let newDay = new Day();
		newDay.userId = req.session.userId.id;
		newDay.clientDate = req.params.clientDate;
		newDay.save().then(day => res.status(201).json(day));
	},
	getCurrentDay: function(req, res) {
		Day.findOne({ clientDate: req.params.clientDate })
			.then(day => {
				res.status(200).json(day);
			})
			.catch(err => {
				this.createDay(req, res);
			});
	}
};
