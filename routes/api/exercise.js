const router = require("express").Router();
const { checkLoginStatus } = require("../../shared/shared");
const { Exercise } = require("../../controllers");

router.post("/add", checkLoginStatus, (req, res) => {
	Exercise.addExercise(req, res);
});

module.exports = router;
