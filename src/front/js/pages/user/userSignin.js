import React, { useState } from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";

export const UserSignin = () => {
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
		setFormData({
			username: username,
			name: name,
			surname: surname,
			email: email,
			password: password
			// repeatPassword: repeatPassword,
			// specialty: specialty,
			// services: services
		});

		console.log(formData);
	};
	return (
		<Container style={{ marginTop: "10rem" }}>
			<Form className="mt-5" onSubmit={handleSubmit}>
				{/* Tipo de usuario
				<fieldset>
					<Form.Group as={Row} className="align-items-center">
						<Form.Label as="legend" column sm={2}>
							Tipo de Usuario
						</Form.Label>
						<Row sm={10} className="ml-3">
							<Form.Check type="radio" label="Profesional" name="typeOfUser" value="Pro" />
							<Form.Check type="radio" label="Usuario" name="typeOfUser" value="U" className="ml-4" />
						</Row>
					</Form.Group>
				</fieldset> */}

				{/* Nombre de usuario */}
				<Form.Group as={Row}>
					<Form.Label column sm={2} htmlFor="username">
						Nombre de Usuario
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="text"
							placeholder="Nombre de Usuario"
							name="username"
							id="username"
							value={username}
							onChange={event => setUsername(event.target.value)}
						/>
					</Col>
				</Form.Group>

				{/* Nombre */}
				<Form.Group as={Row}>
					<Form.Label column sm={2} htmlFor="name">
						Nombre
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="text"
							placeholder="Nombre"
							name="name"
							id="name"
							value={name}
							onChange={event => setName(event.target.value)}
						/>
					</Col>
				</Form.Group>

				{/* Apellidos */}
				<Form.Group as={Row}>
					<Form.Label column sm={2} htmlFor="surname">
						Apellidos
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="text"
							placeholder="Apellidos"
							name="surname"
							id="surname"
							value={surname}
							onChange={event => setSurname(event.target.value)}
						/>
					</Col>
				</Form.Group>

				{/* Email */}
				<Form.Group as={Row}>
					<Form.Label column sm={2} htmlFor="email">
						E-mail
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="email"
							placeholder="E-mail"
							name="email"
							id="email"
							value={email}
							onChange={event => setEmail(event.target.value)}
						/>
					</Col>
				</Form.Group>

				{/* Contraseña */}
				<Form.Group as={Row}>
					<Form.Label column sm={2} htmlFor="password">
						Contraseña
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="password"
							placeholder="Contraseña"
							name="password"
							id="password"
							value={password}
							onChange={event => setPassword(event.target.value)}
						/>
					</Col>
				</Form.Group>

				{/* Repetir contraseña */}
				{/* <Form.Group as={Row}>
					<Form.Label column sm={2} htmlFor="repeatPassword">
						Repetir Contraseña
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="password"
							placeholder="Repetir Contraseña"
							name="repeatPassword"
							id="repeatPassword"
							value={repeatPassword}
							onChange={event => setRepeatPassword(event.target.value)}
						/>
					</Col>
				</Form.Group> */}

				{/* Especialidad */}
				{/* <Form.Group as={Row}>
					<Form.Label column sm={2} htmlFor="specialty">
						Especialidad
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							as="select"
							id="specialty"
							name="specialty"
							value={specialty}
							onChange={event => setSpecialty(event.target.value)}>
							<option value="Esp">Seleccione una especialidad</option>
							<option value="End">Endocrinología</option>
							<option value="Inm">Inmunología</option>
							<option value="Der">Dermatología</option>
							<option value="Reu">Reumatología</option>
						</Form.Control>
					</Col>
				</Form.Group> */}

				{/* Servicios */}
				{/* <Form.Group as={Row}>
					<Form.Label column sm={2} htmlFor="services">
						Servicios
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							as="select"
							id="services"
							name="services"
							value={services}
							onChange={event => setServices(event.target.value)}>
							<option value="Ser">Seleccione un servicio</option>
							<option value="Ac">Acupuntura</option>
							<option value="Nat">Naturopatía</option>
							<option value="MC">Medicina china</option>
							<option value="Med">Meditación</option>
						</Form.Control>
					</Col>
				</Form.Group> */}
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
					<Button variant="primary" type="submit" className="align-items-center" onClick={handleSubmit}>
						Registrarse
					</Button>
				</Row>
			</Form>
		</Container>
	);
};
export default UserSignin;
