import React from "react";
import { Link } from "react-router-dom";

import { LoginIcon } from "../login/login-icon";
import { LogoutIcon } from "../logout/logout-icon";
import { useAuth0 } from "@auth0/auth0-react";

import "./styles.css";

export const Navbar = () => {
	const { isAuthenticated } = useAuth0();

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
				<span className="nav-link">BLOG</span>
				<span className="nav-link">ENFERMEDADES</span>
				<span className="nav-link">PROFESIONALES</span>
				<span className="nav-link">SERVICIOS</span>
				{isAuthenticated ? (
					<>
						<LogoutIcon />
					</>
				) : (
					<LoginIcon />
				)}
			</nav>
		</>
	);
};
