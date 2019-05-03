import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class Home extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col>
						<h1>This is the homepage.</h1>
					</Col>
				</Row>
			</Container>
		);
	}
}
