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
	let userSignUpButton = <></>;
	let professionalSignUpButton = <></>;

	switch (userType) {
		case "user":
			modalTitle = "Acceso Paciente";
			googleButton = (
				<button className="login-google" onClick={loginWithPopup}>
					<FcGoogle style={{ width: "1.8rem", height: "1.8rem" }} /> Inicia con Google
				</button>
			);
			userSignUpButton = (
				<button className="sign-button" href="/user/userSignin">
					<span />
					<span />
					<span />
					<span />
					Crear cuenta
				</button>
			);
			break;
		case "professional":
			modalTitle = "Acceso Profesional";
			professionalSignUpButton = (
				<button className="sign-button" href="/profesional/profesionalSignin">
					<span />
					<span />
					<span />
					<span />
					Crear cuenta
				</button>
			);

		default:
			break;
	}

	return (
		<>
			<Modal show={show} onHide={onHide} className="modal">
				<Modal.Body className="login-box" styles={{ padding: "0" }}>
					<Modal.Header>
						<Modal.Title className="login-head">{modalTitle}</Modal.Title>
					</Modal.Header>
					<div className="user-box">
						<input type="text" className="input-login" />
						<label className="input-text">Email</label>
					</div>
					<div className="user-box">
						<input type="password" className="input-login" />
						<label className="input-text">Contraseña</label>
					</div>
					{googleButton}
					<div className="botones">
						<button className="login-button">
							<span />
							<span />
							<span />
							<span />
							Entrar
						</button>
						{userSignUpButton}
						{professionalSignUpButton}
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
