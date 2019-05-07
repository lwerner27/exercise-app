import React, { Component } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

class WeightForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			muscleGroup: "Select a Muscle Group",
			exerciseData: {
				sets: null,
				reps: null,
				weight: null
			},
			notes: "",
			buttonStatus: true
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleIntChange = this.handleIntChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleIntChange(event) {
		let { exerciseData } = this.state;
		exerciseData[event.target.name] = parseInt(event.target.value);

		let { sets, reps, weight } = exerciseData;

		if (
			typeof sets === "number" &&
			typeof reps === "number" &&
			typeof weight === "number"
		) {
			this.setState({ exerciseData: exerciseData, buttonStatus: false });
		} else {
			this.setState({ exerciseData: exerciseData });
		}
	}

	handleClick() {
		let exerciseData = {
			muscleGroup: this.state.muscleGroup,
			...this.state.exerciseData,
			notes: this.state.notes
		};

		console.log(exerciseData);
	}

	render() {
		let { muscleGroup } = this.state;
		return (
			<Form>
				<Row form>
					<Col sm={12}>
						<FormGroup>
							<Label for="muscleGroup">Muscle Group</Label>
							<Input
								value={muscleGroup}
								type="select"
								name="muscleGroup"
								id="muscleGroup"
								onChange={this.handleChange}
							>
								<option disabled>Select a Muscle Group</option>
								<option>Biceps</option>
								<option>Triceps</option>
								<option>Sholders</option>
								<option>Back</option>
								<option>Legs</option>
							</Input>
						</FormGroup>
					</Col>
				</Row>
				{muscleGroup !== "Select a Muscle Group" && (
					<div>
						<Row form>
							<Col sm={12} md={4}>
								<FormGroup>
									<Label for="sets">Sets</Label>
									<Input
										type="text"
										name="sets"
										id="sets"
										placeholder="4"
										onChange={this.handleIntChange}
									/>
								</FormGroup>
							</Col>
							<Col sm={12} md={4}>
								<FormGroup>
									<Label for="reps">Reps</Label>
									<Input
										type="text"
										name="reps"
										id="reps"
										placeholder="10"
										onChange={this.handleIntChange}
									/>
								</FormGroup>
							</Col>
							<Col sm={12} md={4}>
								<FormGroup>
									<Label for="weight">Weight</Label>
									<Input
										type="text"
										name="weight"
										id="weight"
										placeholder="50"
										onChange={this.handleIntChange}
									/>
								</FormGroup>
							</Col>
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
					disabled={this.state.buttonStatus}
					color="primary"
					block
					onClick={this.handleClick}
				>
					Add Exercise
				</Button>
			</Form>
		);
	}
}

export default WeightForm;
