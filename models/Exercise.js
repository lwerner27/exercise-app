const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
	dayId: { type: Schema.Types.ObjectId },
	exerciseType: String,
	muscleGroup: String,
	sets: {
		type: Number,
		default: null
	},
	reps: {
		type: Number,
		default: null
	},
	weight: {
		type: Number,
		default: null
	},
	cardioType: String,
	duration: {
		type: Number,
		default: null
	},
	distance: {
		type: String,
		default: null
	},
	notes: {
		type: String,
		default: null
	}
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
