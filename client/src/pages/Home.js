import React, { Component } from "react";
import {
	Container,
	Row,
	Col,
	Form,
	FormGroup,
	Label,
	Input,
	Button
} from "reactstrap";

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			confirmPassword: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.submitRegistration = this.submitRegistration.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	submitRegistration() {
		let { username, password, confirmPassword } = this.state;
		if (password === confirmPassword) {
			console.log(username, password, confirmPassword);
			alert("Your account has been created!");
		} else {
			alert("Your passwords do not match please try again.");
		}
	}

	render() {
		return (
			<Container>
				<Row>
					<Col sm={12} md={{ size: 6, offset: 3 }}>
						<br />
						<br />
						<br />
						<Form>
							<FormGroup>
								<Label for="username">Username</Label>
								<Input
									type="text"
									name="username"
									id="usernamer"
									onChange={this.handleChange}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="password">Password</Label>
								<Input
									type="password"
									name="password"
									id="password"
									onChange={this.handleChange}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="confirmPassword">Confirm Password</Label>
								<Input
									type="password"
									name="confirmPassword"
									id="confirmPassword"
									onChange={this.handleChange}
								/>
							</FormGroup>
							<Button block color="primary" onClick={this.submitRegistration}>
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		);
	}
}
