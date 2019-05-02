import React from "react";
import {
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Label,
	Input,
	Button
} from "reactstrap";

export default function LoginModal({
	modal,
	toggle,
	usernamePassword,
	attemptLogin
}) {
	return (
		<div>
			<div>
				<Modal isOpen={modal} toggle={toggle}>
					<ModalHeader toggle={toggle}>LOGIN</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup>
								<Label for="username">Username</Label>
								<Input
									type="text"
									name="username"
									id="username"
									onChange={usernamePassword}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="password">Password</Label>
								<Input
									type="password"
									name="password"
									id="password"
									onChange={usernamePassword}
								/>
							</FormGroup>
							<Button color="primary" block onClick={attemptLogin}>
								LOGIN
							</Button>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		</div>
	);
}
