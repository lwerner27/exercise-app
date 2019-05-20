const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

router.post("/register", (req, res) => {
	let { fullName, email, password } = req.body;

	let userData = {
		fullName,
		password: bcrypt.hashSync(password, 5),
		email
	};

	let newUser = new User(userData);
	newUser
		.save()
		.then(user => {
			return res.status(201).json("signup successful");
		})
		.catch(error => {
			if (error.code === 11000) {
				return res.status(400).json({
					msg: "There is already an account associated with this email."
				});
			} else {
				return res.status(400).json({
					msg:
						"There was a problem with your registration please try again later."
				});
			}
		});
});

module.exports = router;
