import React, { useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import { ProfesionalMenu } from "./profesionalMenu/profesionalMenu";
import "./styles.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const LoginProfesional = () => {
	// const [showProfesionalMenu, setShowProfesionalMenu] = useState(false);

	// const handleClick = () => {
	// 	setShowProfesionalMenu(!showProfesionalMenu);
	// };

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		// <div>
		// 	<div className="profesionalButton" onClick={handleClick}>
		// 		Soy profesional
		// 	</div>
		// 	{showProfesionalMenu ? <ProfesionalMenu /> : null}
		// </div>
		<>
			<Button variant="light" onClick={handleShow}>
				Soy Profesional
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Profesional</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Button variant="secondary" style={{ marginRight: "2rem" }}>
						Acceder
					</Button>
					<Button variant="secondary">Crear cuenta</Button>
				</Modal.Body>
			</Modal>
		</>
	);
};
