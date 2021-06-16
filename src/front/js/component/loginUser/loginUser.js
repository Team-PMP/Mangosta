import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
//import LoginGoogle from "../login/loginGoogle";
import { useAuth0 } from "@auth0/auth0-react";
import { FcGoogle } from "react-icons/fc";

export const LoginUser = props => {
	const { loginWithPopup, loginWithRedirect } = useAuth0();
	const { show, onHide, userType } = props;
	let modalTitle = "";
	let googleButton = <></>;

	switch (userType) {
		case "user":
			modalTitle = "Acceso Paciente";
			googleButton = (
				<button className="login-google" onClick={loginWithPopup}>
					<FcGoogle style={{ width: "1.8rem", height: "1.8rem" }} /> Inicia con Google
				</button>
			);
			break;
		case "professional":
			modalTitle = "Acceso Profesional";

		default:
			break;
	}

	return (
		<>
			<Modal show={show} onHide={onHide}>
				<Modal.Header closeButton className="modalHeader">
					<Modal.Title className="modalTitle">{modalTitle}</Modal.Title>
				</Modal.Header>
				<Modal.Body className="modalBody">
					<label>
						<input type="text" placeholder="Nombre" className="inputLogin" />
					</label>
					<label>
						<input type="password" placeholder="Contraseña" className="inputLogin" />
					</label>
					{googleButton}
					<div className="botones">
						<Button variant="secondary" className="accessButton">
							Entrar
						</Button>
						<Button variant="secondary">Crear cuenta</Button>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

LoginUser.propTypes = {
	show: PropTypes.boolean,
	onHide: PropTypes.func,
	userType: PropTypes.string
};
