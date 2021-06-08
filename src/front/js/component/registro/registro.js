import React, { useState } from "react";

export const Registro = () => {
	const [username, setUsername] = useState("");
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const [specialty, setSpecialty] = useState("");
	const [services, setServices] = useState("");

	return (
		<form>
			<fieldset className="form-group">
				<div className="row">
					<label htmlFor="typeOfUser">Tipo de usuario</label>
					<input type="radio" name="typeOfUser" value="Pro" />
					Profesional
					<input type="radio" name="typeOfUser" value="U" />
					Usuario
				</div>
			</fieldset>

			<div>
				<label htmlFor="username">Nombre de usuario</label>
				<input
					value={username}
					onChange={event => setUsername(event.target.value)}
					name="username"
					id="username"
					type="text"
				/>
			</div>

			<div>
				<label htmlFor="name">Nombre</label>
				<input value={name} onChange={event => setName(event.target.value)} name="name" id="name" type="text" />
			</div>

			<div>
				<label htmlFor="surname">Apellidos</label>
				<input
					value={surname}
					onChange={event => setSurname(event.target.value)}
					name="surname"
					id="surname"
					type="text"
				/>
			</div>

			<div>
				<label htmlFor="email">E-mail</label>
				<input
					value={email}
					onChange={event => setEmail(event.target.value)}
					name="email"
					id="email"
					type="text"
				/>
			</div>

			<div>
				<label htmlFor="password">Contraseña</label>
				<input
					value={password}
					onChange={event => setPassword(event.target.value)}
					name="password"
					id="password"
					type="password"
				/>
			</div>

			<div>
				<label htmlFor="repeatPassword">Repetir contraseña</label>
				<input
					value={repeatPassword}
					onChange={event => setRepeatPassword(event.target.value)}
					name="repeatPassword"
					id="repeatPassword"
					type="password"
				/>
			</div>

			<div>
				<label htmlFor="specialty">Especialidad</label>
				<select
					id="specialty"
					name="specialty"
					value={specialty}
					onChange={event => setSpecialty(event.target.value)}>
					<option value="Esp">Seleccione una especialidad</option>
					<option value="End">Endocrinología</option>
					<option value="Inm">Inmunología</option>
					<option value="Der">Dermatología</option>
					<option value="Reu">Reumatología</option>
				</select>
			</div>

			<div>
				<label htmlFor="services">Servicios</label>
				<select
					id="services"
					name="services"
					value={services}
					onChange={event => setServices(event.target.value)}>
					<option value="Ser">Seleccione un servicio</option>
					<option value="Ac">Acupuntura</option>
					<option value="Nat">Naturopatía</option>
					<option value="MC">Medicina china</option>
					<option value="Med">Meditación</option>
				</select>
			</div>

			<div>
				<input type="checkbox" id="acept" name="acept" value="" />
				Acepto términos y condiciones
			</div>
			<div>
				<button>Registrarse</button>
			</div>
		</form>
	);
};
