require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(bodyParser.json());
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		saveUninitialized: false,
		resave: false
	})
);
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true
});

app.listen(PORT, () => {
	console.log("The server is listening on port " + PORT);
});
