import React from "react";
import {
	Row,
	Col,
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText
} from "reactstrap";

export default function WeightsExercise({
	muscleGroup,
	sets,
	reps,
	weight,
	notes
}) {
	return (
		<ListGroupItem>
			<ListGroupItemHeading>
				<strong>Weights Exercise</strong>
			</ListGroupItemHeading>
			<Row>
				<Col>
					<ListGroupItemText>
						<strong>Muscle:</strong>
						<br /> {muscleGroup}
					</ListGroupItemText>
				</Col>
				<Col>
					<ListGroupItemText>
						<strong>Sets:</strong>
						<br /> {sets}
					</ListGroupItemText>
				</Col>
				<Col>
					<ListGroupItemText>
						<strong>Reps:</strong>
						<br /> {reps}
					</ListGroupItemText>
				</Col>
				<Col>
					<ListGroupItemText>
						<strong>Weight:</strong>
						<br /> {weight}
					</ListGroupItemText>
				</Col>
			</Row>
			{notes && (
				<Row>
					<Col>
						<ListGroupItemText>
							<strong>Notes:</strong>
							<br /> {notes}
						</ListGroupItemText>
					</Col>
				</Row>
			)}
		</ListGroupItem>
	);
}
