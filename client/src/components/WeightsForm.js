import React from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function WeightsForm({ handleChange, muscleGroup }) {
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
							onChange={handleChange}
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
			<Row form>
				<Col sm={12} md={4}>
					<FormGroup>
						<Label for="sets">Sets</Label>
						<Input
							type="text"
							name="sets"
							id="sets"
							placeholder="4"
							onChange={handleChange}
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
							onChange={handleChange}
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
							onChange={handleChange}
						/>
					</FormGroup>
				</Col>
			</Row>
			<Row form>
				<Col>
					<FormGroup>
						<Label for="notes">Notes</Label>
						<Input type="textarea" name="notes" id="notes" />
					</FormGroup>
				</Col>
			</Row>
			<Button color="primary" block>
				Add Exercise
			</Button>
		</Form>
	);
}
