import React, { Component } from "react";
import CustomNav from "./components/CustomNav";
import LoginModal from "./components/LoginModal";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}
	render() {
		let { modal } = this.state;
		return (
			<div>
				<CustomNav toggleLogin={this.toggle} />
				<LoginModal modal={modal} toggle={this.toggle} />
			</div>
		);
	}
}
