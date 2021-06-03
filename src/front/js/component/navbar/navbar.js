import React from "react";
import { Link } from "react-router-dom";
//
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

import { LoginIcon } from "../login/login-icon";
import { LogoutIcon } from "../logout/logout-icon";
import { useAuth0 } from "@auth0/auth0-react";

import "./styles.css";

export const Navigation = () => {
	const { isAuthenticated, user } = useAuth0();

	return (
		<>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home">Logo</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<NavDropdown title="Enfermedades" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Enfermedad de Crohn</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Diabetes</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Artritis reumatoide</NavDropdown.Item>
							{/* <NavDropdown.Divider /> */}
						</NavDropdown>
						<Nav.Link href="#link">Profesionales</Nav.Link>
						<Nav.Link href="#link">Servicios</Nav.Link>
					</Nav>
					<Form inline>
						{/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-success">Search</Button> */}
						{isAuthenticated ? (
							<>
								<LogoutIcon />
							</>
						) : (
							<LoginIcon />
						)}
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};
