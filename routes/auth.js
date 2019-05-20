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
	User.findOne({ email: email })
		.then(user => {
			let passwordCheck = bcrypt.compareSync(password, user.password);
			if (passwordCheck) {
				// Save the user id to session storage.
				req.session.userId = {
					id: user._id
				};
				res.status(200).json({ msg: "You have successfully logged in." });
			} else {
				res.status(401).json({ msg: "Incorrect Password." });
			}
		})
		.catch(error => {
			console.log(error);
			res.status(400).json({
				msg: "There was a problem logging in please try again later."
			});
		});
});

router.all("/logout", (req, res) => {
	req.session.destroy(err => {
		if (err) {
			return res
				.status(400)
				.json({ msg: "There was a problem logging out, please try again." });
		}
	});

	return res
		.status(200)
		.clearCookie("sid")
		.json({ msg: "You have successfully logged out." });
});

// router.get("/status", (req, res) => {});

module.exports = router;
