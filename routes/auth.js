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

router.post("/login", (req, res) => {
	let { email, password } = req.body;
	User.findOne({ email: email }, "username email password")
		.then(userData => {
			let passwordCheck = bcrypt.compareSync(password, userData.password);
			if (passwordCheck) {
				// Using bcrypt to check the password agains the hashed password in the database.
				req.session.user = {
					email: userData.email,
					username: userData.username,
					id: userData._id
				};
				// saving some user's data into user's session
				req.session.user.expires = new Date(
					// session expires in 3 days
					Date.now() + 3 * 24 * 3600 * 1000
				);
				return res.status(200).json({ msg: "You are logged in." });
			} else {
				return res.status(401).json({ msg: "Invalid username or password." });
			}
		})
		.catch(err => {
			console.log(err);
			return res
				.status(400)
				.json({ msg: "There was a problem loggin in please try again later." });
		});
});

router.all("/logout", (req, res) => {
	req.session.destroy();
	res.status(200).json({ msg: "You have logged out." });
});

module.exports = router;
