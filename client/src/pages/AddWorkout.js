import React, { Component } from "react";
import WeightsForm from "../components/WeightsForm";
import { Container, Row, Col, Form, FormGroup, Input, Label } from "reactstrap";

export default class AddWorkout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: "",
			exercises: [],
			exerciseType: "Select Exercise Type",
			muscleGroup: "Select a Muscle Group"
		};
		this.compareDates = this.compareDates.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.renderForm = this.renderForm.bind(this);
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

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	renderForm() {
		let { exerciseType, muscleGroup } = this.state;
		if (exerciseType === "Weights") {
			return (
				<WeightsForm
					handleChange={this.handleChange}
					muscleGroup={muscleGroup}
				/>
			);
		} else {
			return null;
		}
	}

	render() {
		console.log(this.state);
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
					</Col>
					<Col sm={12} md={6}>
						<h1>This column will display already added exercise data.</h1>
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