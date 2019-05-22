module.exports = {
	checkLoginStatus: function(req, res, next) {
		if (req.session.userId) {
			next();
		} else {
			return res.status(401).json({ msg: "You are not currently logged in." });
		}
	}
};
