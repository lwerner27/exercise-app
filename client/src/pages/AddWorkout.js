import React, { Component } from "react";
import WeightsForm from "../components/WeightsForm";
import CardioForm from "../components/CardioForm";
import DisplayExercises from "../components/DisplayExercise";
import { Container, Row, Col, Form, FormGroup, Input, Label } from "reactstrap";

export default class AddWorkout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: "",
			exercises: [],
			exerciseType: "Select Exercise Type"
		};
		this.compareDates = this.compareDates.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.renderForm = this.renderForm.bind(this);
		this.addExercise = this.addExercise.bind(this);
	}

	// Compares the data on local storage to the current data and acts accordingly.
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

	// Handles the changes for all inputs on this page and its subcomponents.
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	// Renders either the WeightsForm or CardioForm depending on what is selected.
	renderForm() {
		let { exerciseType } = this.state;
		if (exerciseType === "Weights") {
			return <WeightsForm addExercise={this.addExercise} />;
		} else if (exerciseType === "Cardio") {
			return <CardioForm addExercise={this.addExercise} />;
		} else {
			return null;
		}
	}

	addExercise(exerciseData) {
		let { exercises } = this.state;
		exercises.unshift(exerciseData);
		this.setState(exercises, () => {
			localStorage.setItem("storedData", JSON.stringify(this.state));
		});
	}

	render() {
		return (
			<Container>
				<br />
				<br />
				<Row>
					<Col sm={12} md={6}>
						<Form>
							<Row form>
								<Col sm={12}>
									<FormGroup>
										<Label for="exerciseType">Exercise Type</Label>
										<Input
											value={this.state.exerciseType}
											type="select"
											name="exerciseType"
											id="exerciseType"
											onChange={this.handleChange}
										>
											<option disabled>Select Exercise Type</option>
											<option>Weights</option>
											<option>Cardio</option>
										</Input>
									</FormGroup>
								</Col>
							</Row>
						</Form>
						{this.renderForm()}
						<br />
					</Col>
					<DisplayExercises exercises={this.state.exercises} />
				</Row>
			</Container>
		);
	}
}

// A function for getting the current date and formatting it correctly.
function getDate() {
	let date = new Date();
	let today = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
	return today;
}
