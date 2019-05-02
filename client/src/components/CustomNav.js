import React, { Component } from "react";
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
	render() {
		let { toggleLogin } = this.props;
		return (
			<div>
				<Navbar color="dark" dark expand="md">
					<NavbarBrand href="/">My Fit</NavbarBrand>
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
							<NavItem>
								<NavLink onClick={toggleLogin}>Login</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
