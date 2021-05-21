import React from "react";
import { Link } from "react-router-dom";

import { LoginIcon } from "../login/login-icon";
import { LogoutIcon } from "../logout/logout-icon";

import "./styles.css";

export const Navbar = () => {
	return (
		<>
			{/* <nav classNameName="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span classNameName="navbar-brand mb-0 h1">BLOG</span>
				</Link>
				<Link to="/">
					<span classNameName="navbar-brand mb-0 h1">ENFERMEDADES</span>
				</Link>
				<div classNameName="ml-auto">
					<Link to="/demo">
						<button classNameName="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</nav> */}

			<nav className="nav">
				<span>BLOG</span>
				<span>ENFERMEDADES</span>
				<span>PROFESIONALES</span>
				<span>SERVICIOS</span>

				<LoginIcon />
				<LogoutIcon />
			</nav>
		</>
	);
};
