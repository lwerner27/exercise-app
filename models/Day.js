const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const daySchema = new Schema({
	userId: { type: Schema.Types.ObjectId, ref: "User" },
	createdAt: {
		type: Date,
		default: Date.now
	},
	clientDate: { type: String, required: true },
	exercises: [{ type: Schema.Types.ObjectId, ref: "Exercise" }]
});

const Day = mongoose.model("Day", daySchema);

module.exports = Day;
