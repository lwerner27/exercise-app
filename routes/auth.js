const router = require("express").Router();
const admin = require("firebase-admin");

router.post("/register", (req, res) => {
	admin
		.auth()
		.createUser({
			email: req.body.email,
			password: req.body.password,
			displayName: req.body.username
		})
		.then(user => {
			// TODO: Create a MongoDB User document.
			res.status(200).json({
				msg: "Account has been created.",
				userData: user
			});
		})
		.catch(err => {
			console.log(err);
			res.json({
				msg:
					"There was a problem creating your account, please try again later."
			});
		});
});

module.exports = router;
