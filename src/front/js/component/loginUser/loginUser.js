import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
//import LoginGoogle from "../login/loginGoogle";
import { useAuth0 } from "@auth0/auth0-react";
import { FcGoogle } from "react-icons/fc";
//Login
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
				<Button variant="secondary" href="/user/userSignin" className="signupButton">
					Crear cuenta
				</Button>
			);
			break;
		case "professional":
			modalTitle = "Acceso Profesional";
			professionalSignUpButton = (
				<Button variant="secondary" href="/profesional/profesionalSignin" className="signupButton">
					Crear cuenta
				</Button>
			);

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
						<input
							type="text"
							placeholder="Correo electronico"
							name="email"
							id="email"
							value={email}
							className="inputLogin"
							onChange={event => setEmail(event.target.value)}
						/>
					</label>
					<label>
						<input
							type="password"
							placeholder="Contraseña"
							name="password"
							id="password"
							value={password}
							onChange={event => setPassword(event.target.value)}
							className="inputLogin"
						/>
					</label>
					{googleButton}
					<div className="botones">
						<Button variant="secondary" className="accessButton" onClick={loginSubmit}>
							Entrar
						</Button>
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
