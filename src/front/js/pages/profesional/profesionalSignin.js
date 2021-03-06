import React, { useState, useContext } from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";
import { Context } from "../../store/appContext";
import "../../../styles/signUp.scss";

export const ProfesionalSignin = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const [specialty, setSpecialty] = useState("");
	const [services, setServices] = useState("");

	const handleSubmit = evt => {
		evt.preventDefault();

		const data = {
			name: name,
			surname: surname,
			email: email,
			password: password,
			specialty: specialty,
			services: services,
			profesional: true
		};
		actions.createUser(data);
	};

	return (
		<div className="form-layout">
			<Form className="form-container" onSubmit={handleSubmit}>
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

				{/* Contrase??a */}
				<Form.Group as={Row} className="user-box">
					<Form.Label column sm={2} htmlFor="password" className="input-text">
						Contrase??a
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

				{/* Repetir contrase??a */}
				<Form.Group as={Row} className="user-box">
					<Form.Label column sm={2} htmlFor="repeatPassword" className="input-text">
						Repetir Contrase??a
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="password"
							name="repeatPassword"
							id="repeatPassword"
							className="input-login"
							value={repeatPassword}
							onChange={event => setRepeatPassword(event.target.value)}
						/>
					</Col>
				</Form.Group>

				{/* Especialidad */}
				<Form.Group as={Row} className="user-box">
					<Form.Label column sm={2} htmlFor="specialty" className="input-text">
						Especialidad
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							as="select"
							id="specialty"
							name="specialty"
							className="input-login"
							value={specialty}
							onChange={event => setSpecialty(event.target.value)}>
							<option value="Esp">Seleccione una especialidad</option>
							<option value="1">Endocrinolog??a</option>
							<option value="2">Inmunolog??a</option>
							<option value="3">Dermatolog??a</option>
							<option value="4">Reumatolog??a</option>
						</Form.Control>
					</Col>
				</Form.Group>

				{/* Servicios */}
				<Form.Group as={Row} className="user-box">
					<Form.Label column sm={2} htmlFor="services" className="input-text">
						Servicios
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							as="select"
							id="services"
							name="services"
							className="input-login"
							value={services}
							onChange={event => setServices(event.target.value)}>
							<option value="Ser">Seleccione un servicio</option>
							<option value="Ac">Acupuntura</option>
							<option value="Nat">Naturopat??a</option>
							<option value="MC">Medicina china</option>
							<option value="Med">Meditaci??n</option>
						</Form.Control>
					</Col>
				</Form.Group>
				<Row className="justify-content-center mt-5">
					{/* Terminos y condiciones */}
					<Form.Group as={Row}>
						<Form.Check
							type="checkbox"
							label="Acepto t??rminos y condiciones"
							id="accept"
							name="accept"
							value=""
						/>
					</Form.Group>
				</Row>
				<Row className="justify-content-center mt-4">
					{/* Submit */}
					<Button variant="primary" type="submit" className="login-button">
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
export default ProfesionalSignin;
