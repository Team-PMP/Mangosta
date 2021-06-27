import React, { useState, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "react-bootstrap/Spinner";
import { FaUser } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import "./styles.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../../store/appContext";

export const Profile = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();
	const { store, actions } = useContext(Context);
	const { logout } = useAuth0();
	const token = localStorage.getItem("jwt-token");

	const logoutSubmit = () => {
		actions.logOut();
	};

	return (
		<div>
			{isAuthenticated && (
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
			)}
			{token && (
				<Dropdown className="miniProfile">
					<Dropdown.Toggle variant="light" id="dropdown-basic">
						<FaUser style={{ width: "1.2rem", height: "1.2rem" }} />
					</Dropdown.Toggle>
					<Dropdown.Menu className="dropMenu">
						<Dropdown.Item href="/perfil">Perfil</Dropdown.Item>
						<Dropdown.Item onClick={logoutSubmit}>Cerrar sesión</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			)}
		</div>
	);
};
