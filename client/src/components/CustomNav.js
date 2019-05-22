import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	Nav,
	NavItem,
	NavLink
} from "reactstrap";

export default class CustomNav extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	checkLogin(status) {
		if (status) {
			return (
				<NavItem>
					<NavLink tag={Link} to="#" onClick={this.props.attemptLogout}>
						Logout
					</NavLink>
				</NavItem>
			);
		} else {
			return (
				<NavItem>
					<NavLink tag={Link} to="#" onClick={this.props.toggleLogin}>
						Login
					</NavLink>
				</NavItem>
			);
		}
	}

	componentDidUpdate() {}

	render() {
		let { loginStatus } = this.props;
		return (
			<div>
				<Navbar color="dark" dark expand="md">
					<NavbarBrand tag={Link} to="/">
						My Fit
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink
									href="https://github.com/lwerner27/exercise-app"
									target="_blank"
								>
									GitHub
								</NavLink>
							</NavItem>
							{this.checkLogin(loginStatus)}
							<NavItem>
								<NavLink tag={Link} to="/addworkout">
									Add Workout
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
