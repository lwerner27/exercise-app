require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const firebase = require("firebase");
// const mongoose = require("mongoose");
const routes = require("./routes");

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: "ljw-exercise-app.firebaseapp.com",
	databaseURL: "https://ljw-exercise-app.firebaseio.com",
	projectId: "ljw-exercise-app",
	storageBucket: "ljw-exercise-app.appspot.com",
	messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const PORT = process.env.PORT || 8080;
const app = express();

app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(bodyParser.json());
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(
// 	process.env.MONGODB_URI || "mongodb://localhost:27017/GameOfThronesDB",
// 	{
// 		useNewUrlParser: true
// 	}
// );

app.listen(PORT, () => {
	console.log("The server is listening on port " + PORT);
});
