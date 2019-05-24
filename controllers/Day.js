const Day = require("../models/Day");

module.exports = {
	createDay: function(req, res) {
		let newDay = new Day();
		newDay.userId = req.session.userId;
		newDay.clientDate = req.params.clientDate;
		newDay.save().then(day => {
			req.session.dayId = day.__id;
			return res.status(201).json(day);
		});
	},
	getCurrentDay: function(req, res) {
		Day.findOne({
			clientDate: req.params.clientDate,
			userId: req.session.userId
		})
			.then(day => {
				if (day) {
					req.session.dayId = day.__id;
					return res.status(200).json(day);
				} else {
					this.createDay(req, res);
				}
			})
			.catch(err => {
				console.log(err);
				return res.status(400).json({
					msg: "There was a problem finding your data. Please try again later."
				});
			});
	}
};
