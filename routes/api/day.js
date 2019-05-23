const router = require("express").Router();
const { checkLoginStatus } = require("../../shared/shared");
const { Day } = require("../../controllers");

router.get("/current/:clientDate", checkLoginStatus, (req, res) => {
	Day.getCurrentDay(req, res);
});

module.exports = router;
