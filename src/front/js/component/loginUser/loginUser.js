import React, { useState } from "react";
import "./styles.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const LoginUser = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		// <div>
		// 	<div className="userButton">Soy Paciente</div>
		// </div>

		<>
			<Button variant="light" onClick={handleShow}>
				Soy Paciente
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Paciente</Modal.Title>
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
