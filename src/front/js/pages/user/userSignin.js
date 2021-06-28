import React, { useState, useContext } from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";
import "../../../styles/signUp.scss";
import { Context } from "../../store/appContext";

export const UserSignin = () => {
	const { store, actions } = useContext(Context);
	const [username, setUsername] = useState("");
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	// const [specialty, setSpecialty] = useState("");
	// const [services, setServices] = useState("");

	// const [formData, setFormData] = useState({
	// 	username: "",
	// 	name: "",
	// 	surname: "",
	// 	email: "",
	// 	password: "",
	// 	repeatPassword: "",
	// 	specialty: "",
	// 	services: ""
	// });

	const handleSubmit = evt => {
		evt.preventDefault();

		const data = {
			username: username,
			name: name,
			surname: surname,
			email: email,
			password: password
		};

		actions.createUser(data);
	};

	return (
		<div className="form-layout">
			<Form className="form-container" onSubmit={handleSubmit}>
				{/* Nombre de usuario */}
				<Form.Group as={Row} className="user-box">
					<Form.Label column sm={2} htmlFor="username" className="input-text">
						Nombre de Usuario
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="text"
							name="username"
							id="username"
							className="input-login"
							value={username}
							onChange={event => setUsername(event.target.value)}
						/>
					</Col>
				</Form.Group>

				{/* Nombre */}
				<Form.Group as={Row} className="user-box">
					<Form.Label column sm={2} htmlFor="name" className="input-text">
						Nombre
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="text"
							name="name"
							id="name"
							className="input-login"
							value={name}
							onChange={event => setName(event.target.value)}
						/>
					</Col>
				</Form.Group>

				{/* Apellidos */}
				<Form.Group as={Row} className="user-box">
					<Form.Label column sm={2} htmlFor="surname" className="input-text">
						Apellidos
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="text"
							name="surname"
							id="surname"
							className="input-login"
							value={surname}
							onChange={event => setSurname(event.target.value)}
						/>
					</Col>
				</Form.Group>

				{/* Email */}
				<Form.Group as={Row} className="user-box">
					<Form.Label column sm={2} htmlFor="email" className="input-text">
						E-mail
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="email"
							name="email"
							id="email"
							className="input-login"
							value={email}
							onChange={event => setEmail(event.target.value)}
						/>
					</Col>
				</Form.Group>

				{/* Contraseña */}
				<Form.Group as={Row} className="user-box">
					<Form.Label column sm={2} htmlFor="password" className="input-text">
						Contraseña
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="password"
							name="password"
							id="password"
							className="input-login"
							value={password}
							onChange={event => setPassword(event.target.value)}
						/>
					</Col>
				</Form.Group>
				<Row className="justify-content-center mt-5">
					{/* Terminos y condiciones */}
					<Form.Group as={Row}>
						<Form.Check
							type="checkbox"
							label="Acepto términos y condiciones"
							id="accept"
							name="accept"
							value=""
						/>
					</Form.Group>
				</Row>
				<Row className="justify-content-center mt-4">
					{/* Submit */}
					<Button variant="primary" type="submit" className="login-button" onClick={handleSubmit}>
						<span />
						<span />
						<span />
						<span />
						Registrarse
					</Button>
				</Row>
			</Form>
		</div>
	);
};
export default UserSignin;
