import React, { Component } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

export default class CardioForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cardioType: "Select a Cardio Type",
			exerciseData: {
				duration: null,
				distance: null
			},
			notes: null,
			disableButton: true
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleIntChange = this.handleIntChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	// Handles the changes to selectors or input fields that take strings.
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	// Handles the changes and validation of input fields that take numbers.
	handleIntChange(event) {
		let { exerciseData, cardioType } = this.state;
		exerciseData[event.target.name] = parseInt(event.target.value);
		let { duration, distance } = exerciseData;
		if (cardioType === "Running" && duration && distance) {
			this.setState({
				exerciseData: exerciseData,
				disableButton: false
			});
		} else if (cardioType === "Core" && duration) {
			this.setState({
				exerciseData: exerciseData,
				disableButton: false
			});
		} else if (cardioType === "Running" && (!duration || !distance)) {
			this.setState({
				exerciseData: exerciseData,
				disableButton: true
			});
		}
	}

	handleClick() {
		let exerciseData = {
			exerciseType: "Cardio",
			cardioType: this.state.cardioType,
			...this.state.exerciseData,
			notes: this.state.notes
		};
		this.props.addExercise(exerciseData);
	}

	render() {
		let { cardioType } = this.state;
		return (
			<Form>
				<Row form>
					<Col>
						<FormGroup>
							<Label>Cardio Type</Label>
							<Input
								value={cardioType}
								type="select"
								name="cardioType"
								id="cardioType"
								onChange={this.handleChange}
							>
								<option disabled>Select a Cardio Type</option>
								<option>Running</option>
								<option>Core</option>
							</Input>
						</FormGroup>
					</Col>
				</Row>
				{cardioType !== "Select a Cardio Type" && (
					<div>
						<Row form>
							<Col>
								<FormGroup>
									<Label for="duration">Duration (Minutes)</Label>
									<Input
										type="text"
										name="duration"
										id="duration"
										placeholder="30"
										onChange={this.handleIntChange}
									/>
								</FormGroup>
							</Col>

							{cardioType === "Running" && (
								<Col sm={12} md={6}>
									<FormGroup>
										<Label for="distance">Distance (Kilometers)</Label>
										<Input
											type="text"
											name="distance"
											id="distance"
											placeholder="10"
											onChange={this.handleIntChange}
										/>
									</FormGroup>
								</Col>
							)}
						</Row>
						<Row form>
							<Col>
								<FormGroup>
									<Label for="notes">Notes</Label>
									<Input
										type="textarea"
										name="notes"
										id="notes"
										onChange={this.handleChange}
									/>
								</FormGroup>
							</Col>
						</Row>
					</div>
				)}
				<Button
					disabled={this.state.disableButton}
					onClick={this.handleClick}
					color="primary"
					block
				>
					Add Exercise
				</Button>
			</Form>
		);
	}
}
