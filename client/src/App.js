import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import CustomNav from "./components/CustomNav";
import LoginModal from "./components/LoginModal";
import Home from "./pages/Home";
import AddWorkout from "./pages/AddWorkout";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			email: "",
			password: ""
		};

		this.toggle = this.toggle.bind(this);
		this.emailPassword = this.emailPassword.bind(this);
		this.attemptLogin = this.attemptLogin.bind(this);
	}

	//Updates the state of username and password.
	emailPassword(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	//Function for sending request to authenticate user.
	attemptLogin() {
		let { email, password } = this.state;

		console.log(email, password);

		axios.post("/auth/login", { email, password }).then(user => {
			console.log(user);
		});
	}

	//Toggles visibility of login modal.
	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}

	render() {
		let { modal } = this.state;
		return (
			<div>
				<Router>
					<CustomNav toggleLogin={this.toggle} />
					<LoginModal
						modal={modal}
						toggle={this.toggle}
						email={this.state.email}
						password={this.state.password}
						emailPassword={this.emailPassword}
						attemptLogin={this.attemptLogin}
					/>
					<Route exact path="/" component={Home} />
					<Route path="/addworkout" component={AddWorkout} />
				</Router>
			</div>
		);
	}
}
