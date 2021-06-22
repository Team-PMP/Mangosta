import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "react-bootstrap/Spinner";
import "./styles.css";
import Dropdown from "react-bootstrap/Dropdown";

export const Profile = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();
	console.log("user info", user);

	const { logout } = useAuth0();
	return (
		isAuthenticated && (
			<Dropdown className="miniProfile">
				<Dropdown.Toggle variant="secondary" id="dropdown-basic">
					<img src={user.picture} className="photo" alt={user.name} />
				</Dropdown.Toggle>
				<Dropdown.Menu className="dropMenu">
					<Dropdown.Item href="/perfil">Perfil</Dropdown.Item>
					<Dropdown.Item onClick={() => logout({ returnTo: window.location.origin })}>
						Cerrar sesión
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		)
	);
};
