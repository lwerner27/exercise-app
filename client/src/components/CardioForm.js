import React from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function CardioForm({ cardioType, handleChange }) {
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
							onChange={handleChange}
						>
							<option disabled>Select a Cardio Type</option>
							<option>Running</option>
							<option>Core</option>
						</Input>
					</FormGroup>
				</Col>
			</Row>
			<Row form>
				<Col>
					<FormGroup>
						<Label for="duration">Duration (Minutes)</Label>
						<Input type="text" name="duration" id="duration" placeholder="30" />
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
							onChange={handleChange}
						/>
					</FormGroup>
				</Col>
			</Row>
			<Button color="primary" block>
				Add Exercise
			</Button>
		</Form>
	);
}
