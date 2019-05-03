import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CustomNav from "./components/CustomNav";
import LoginModal from "./components/LoginModal";
import Home from "./pages/Home";
import AddWorkout from "./pages/AddWorkout";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			username: "",
			password: ""
		};

		this.toggle = this.toggle.bind(this);
		this.usernamePassword = this.usernamePassword.bind(this);
		this.attemptLogin = this.attemptLogin.bind(this);
	}

	//Updates the state of username and password.
	usernamePassword(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	//Function for sending request to authenticate user.
	attemptLogin() {
		console.log(this.state);
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
						usernamePassword={this.usernamePassword}
						attemptLogin={this.attemptLogin}
					/>
					<Route exact path="/" component={Home} />
					<Route path="/addworkout" component={AddWorkout} />
				</Router>
			</div>
		);
	}
}
