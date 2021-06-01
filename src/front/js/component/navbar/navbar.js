import React from "react";
import { Link } from "react-router-dom";
import { LoginIcon } from "../login/login-icon";
import { LogoutIcon } from "../logout/logout-icon";
import { useAuth0 } from "@auth0/auth0-react";
//styles
import "./styles.css";
//components
import ModalLogin from "../modalLogin/modalLogin";

export const Navbar = () => {
	const { isAuthenticated } = useAuth0();

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdownMenuLink"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Enfermedades
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<a className="dropdown-item" href="#">
									Enfermedad de Crohn
								</a>
								<a className="dropdown-item" href="#">
									Diabetes
								</a>
								<a className="dropdown-item" href="#">
									Artritis reumatoide
								</a>
								<a className="dropdown-item" href="#">
									...
								</a>
							</div>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Profesionales
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdownMenuLink"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Servicios
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<a className="dropdown-item" href="#">
									Yoga
								</a>
								<a className="dropdown-item" href="#">
									Medicina Oriental
								</a>
								<a className="dropdown-item" href="#">
									Acupuntura
								</a>
								<a className="dropdown-item" href="#">
									Meditación
								</a>
								<a className="dropdown-item" href="#">
									Alimentación
								</a>
							</div>
						</li>
					</ul>
					<ModalLogin />
				</div>
			</nav>
		</>
	);
};

// {isAuthenticated ? (
// 		<>
// 			<LogoutIcon />
// 		</>
// 	) : (
// 		<LoginIcon />
// 	);
// }
