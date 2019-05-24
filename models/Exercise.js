const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
	dayId: { type: Schema.Types.ObjectId },
	exerciseType: {
		type: String,
		required: true
	},
	muscleGroup: {
		type: String
	},
	sets: {
		type: Number
	},
	reps: {
		type: Number
	},
	weight: {
		type: Number
	},
	cardioType: {
		type: String
	},
	duration: {
		type: Number
	},
	distance: {
		type: String
	},
	notes: {
		type: String
	}
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
