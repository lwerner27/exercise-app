const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema(
	{
		fullName: {
			type: String,
			required: true,
			trim: true
		},
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true,
			lowercase: true
		},
		password: {
			type: String,
			required: true
		},
		createdAt: {
			type: Date,
			required: false
		},
		updatedAt: {
			type: Number,
			required: false
		},
		days: [{ type: Schema.Types.ObjectId, ref: "Day" }]
	},
	{ runSettersOnQuery: true }
);

userSchema.pre("save", function(next) {
	this.email = this.email.toLowerCase();

	var currentDate = new Date().getTime();
	this.updatedAt = currentDate;
	if (!this.created_at) {
		this.createdAt = currentDate;
	}
	next();
});

var User = mongoose.model("User", userSchema);

module.exports = User;
