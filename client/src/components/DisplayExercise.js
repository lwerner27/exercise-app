import React from "react";
import { Row, Col, ListGroup } from "reactstrap";
import WeightsExercise from "../components/WeightsExercise";
import CardioExercise from "../components/CardioExercise";

export default function DisplayExercise({ exercises }) {
	let exerciseElements = [];
	exercises.forEach(exercise => {
		if (exercise.exerciseType === "Weights") {
			let { muscleGroup, sets, reps, weight, notes } = exercise;
			exerciseElements.push(
				<WeightsExercise
					muscleGroup={muscleGroup}
					sets={sets}
					reps={reps}
					weight={weight}
					notes={notes}
				/>
			);
		} else {
			let { cardioType, duration, distance, notes } = exercise;
			exerciseElements.push(
				<CardioExercise
					cardioType={cardioType}
					duration={duration}
					distance={distance}
					notes={notes}
				/>
			);
		}
	});
	return (
		<Col sm={12} md={6}>
			<Row>
				<Col>
					<ListGroup>{exerciseElements}</ListGroup>
				</Col>
			</Row>
		</Col>
	);
}
