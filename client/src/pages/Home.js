import React, { Component } from "react";
import axios from "axios";
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
		let { email, username, password, confirmPassword } = this.state;

		let userInfo = {
			email,
			username,
			password
		};

		if (password === confirmPassword) {
			axios.post("/auth/register", userInfo).then(res => {
				console.log(res);
			});
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
								<Label for="email">Email</Label>
								<Input
									type="text"
									name="email"
									id="email"
									onChange={this.handleChange}
								/>
							</FormGroup>
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
