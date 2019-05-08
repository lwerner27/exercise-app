import React from "react";
import {
	Row,
	Col,
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText
} from "reactstrap";

export default function CardioExercise({
	cardioType,
	duration,
	distance,
	notes
}) {
	return (
		<ListGroupItem>
			<ListGroupItemHeading>
				<strong>Cardio Exercise</strong>
			</ListGroupItemHeading>
			<Row>
				<Col>
					<ListGroupItemText>
						<strong>Type:</strong>
						<br /> {cardioType}
					</ListGroupItemText>
				</Col>
				<Col>
					<ListGroupItemText>
						<strong>Duration:</strong>
						<br /> {duration}
					</ListGroupItemText>
				</Col>
				{distance && (
					<Col>
						<ListGroupItemText>
							<strong>Distance:</strong>
							<br /> {distance}
						</ListGroupItemText>
					</Col>
				)}
			</Row>
			{notes && (
				<Row>
					<Col>
						<ListGroupItemText>
							<strong>Notes:</strong>
							<br />
							{notes}
						</ListGroupItemText>
					</Col>
				</Row>
			)}
		</ListGroupItem>
	);
}
