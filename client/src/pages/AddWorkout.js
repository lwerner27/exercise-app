import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class AddWorkout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: "",
			exercises: []
		};
		this.compareDates = this.compareDates.bind(this);
	}

	compareDates(date, data) {
		if (date === data.date) {
			console.log("The dates match.");
			this.setState(data);
		} else {
			console.log("The dates do not match.");
			localStorage.removeItem("storedData");
			this.setState({ date: date });
		}
	}

	componentDidMount() {
		let ls = localStorage;
		let todaysDate = getDate();
		let storedData = JSON.parse(ls.getItem("storedData"));

		if (storedData) {
			this.compareDates(todaysDate, storedData);
		} else {
			this.setState({ date: todaysDate });
		}
	}

	render() {
		console.log(this.state);
		return (
			<Container>
				<Row>
					<Col>
						<h1>This is the addWorkout page.</h1>
					</Col>
				</Row>
			</Container>
		);
	}
}

function getDate() {
	let date = new Date();
	let today = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
	return today;
}
