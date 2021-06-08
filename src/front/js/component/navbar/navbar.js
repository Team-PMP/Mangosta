import React from "react";
import { Link } from "react-router-dom";
//images
import Logo from "../../../img/logo.png";
import { AiFillHome } from "react-icons/ai";
import Spinner from "react-bootstrap/Spinner";
//
import { Profile } from "../profile/profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

import { LoginIcon } from "../login/login-icon";
import { LogoutIcon } from "../logout/logout-icon";
import { useAuth0 } from "@auth0/auth0-react";
import UserMenu from "../userMenu/userMenu";

import "./styles.css";

export const Navigation = () => {
	const { isLoading, isAuthenticated, user } = useAuth0();

	return (
		<>
			<Navbar className="navbar" expand="lg">
				<Navbar.Brand href="/">
					<AiFillHome style={{ width: "2rem", height: "2rem" }} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className="navbarCollapse">
					<Nav className="mr-auto ">
						<NavDropdown className="dropwdown" title="Enfermedades" id="basic-nav-dropdown">
							<NavDropdown.Item className="link" href="#action/3.1">
								Enfermedad de Crohn
							</NavDropdown.Item>
							<NavDropdown.Item className="link" href="#action/3.2">
								Diabetes
							</NavDropdown.Item>
							<NavDropdown.Item className="link" href="#action/3.3">
								Artritis reumatoide
							</NavDropdown.Item>
							{/* <NavDropdown.Divider /> */}
						</NavDropdown>
						<Nav.Link className="main-button" href="/profesionales">
							Profesionales
						</Nav.Link>
						<Nav.Link className="main-button" href="/servicios">
							Servicios
						</Nav.Link>
						<Profile />
					</Nav>
					<Form inline>
						{isLoading ? <Spinner animation="border" /> : null}
						{isAuthenticated ? <></> : <LoginIcon />}
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};
