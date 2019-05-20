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
	email,
	password,
	emailPassword,
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
								<Label for="email">Email</Label>
								<Input
									type="text"
									name="email"
									id="email"
									onChange={emailPassword}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="password">Password</Label>
								<Input
									type="password"
									name="password"
									id="password"
									onChange={emailPassword}
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
