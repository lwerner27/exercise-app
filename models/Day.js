const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const daySchema = new Schema({
	userId: { type: Schema.Types.ObjectId, ref: "User" },
	dbDate: { type: Date, default: Date.now },
	clientData: String,
	exercises: [{ type: Schema.Types.ObjectId, ref: "Exercise" }]
});

const Day = mongoose.model("Day", daySchema);

module.exports = Day;