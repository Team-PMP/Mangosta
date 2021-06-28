import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
//import LoginGoogle from "../login/loginGoogle";
import { useAuth0 } from "@auth0/auth0-react";
import { FcGoogle } from "react-icons/fc";
import { Context } from "../../store/appContext";

export const LoginUser = props => {
	const { loginWithPopup, loginWithRedirect } = useAuth0();
	const { show, onHide, userType } = props;
	let modalTitle = "";
	let googleButton = <></>;
	let userSignUpButton = <></>;
	let professionalSignUpButton = <></>;
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const loginSubmit = evt => {
		evt.preventDefault();

		const data = {
			email: email,
			password: password
		};

		actions.loginUser(data);
	};

	switch (userType) {
		case "user":
			modalTitle = "Acceso Paciente";
			googleButton = (
				<button className="login-google" onClick={loginWithPopup}>
					<FcGoogle style={{ width: "1.8rem", height: "1.8rem" }} /> Inicia con Google
				</button>
			);
			userSignUpButton = (
				<button className="sign-button">
					<span />
					<span />
					<span />
					<span />
					<a href="/user/userSignin">Crear cuenta</a>
				</button>
			);
			break;
		case "professional":
			modalTitle = "Acceso Profesional";
			professionalSignUpButton = (
				<button className="sign-button">
					<span />
					<span />
					<span />
					<span />
					<a href="/profesional/profesionalSignin">Crear cuenta</a>
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
						<input
							type="text"
							className="input-login"
							onChange={event => setEmail(event.target.value)}
							name="email"
							id="email"
							value={email}
						/>
						<label className="input-text">Email</label>
					</div>
					<div className="user-box">
						<input
							type="password"
							className="input-login"
							onChange={event => setPassword(event.target.value)}
							name="password"
							id="password"
							value={password}
						/>
						<label className="input-text">Contraseña</label>
					</div>
					{googleButton}
					<div className="botones">
						<button className="login-button" onClick={loginSubmit}>
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
