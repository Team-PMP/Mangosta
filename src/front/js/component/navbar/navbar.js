import React, { useState } from "react";
import { Link } from "react-router-dom";
//images
import Logo from "../../../img/logo.png";
import { AiFillHome } from "react-icons/ai";
import { GiStethoscope } from "react-icons/gi";
import { BiUser } from "react-icons/bi";
import Spinner from "react-bootstrap/Spinner";
import { Profile } from "../profile/profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { LoginUser } from "../loginUser/loginUser";
// import { LoginProfesional } from "../loginProfesional/loginProfesional";

import { useAuth0 } from "@auth0/auth0-react";
import "./styles.css";

const Navigation = () => {
	const { isLoading, isAuthenticated, user } = useAuth0();
	// const [showProfessionalLogin, setShowProfessionalLogin] = useState(false);
	const [showUserLogin, setShowUserLogin] = useState(false);
	const [userType, setUserType] = useState("user");

	// const toggleProfessionalLogin = () => {
	// 	setShowProfessionalLogin(!showProfessionalLogin);
	// };
	// const toggleUserLogin = () => {
	// 	setShowUserLogin(!showUserLogin);
	// };

	const closeLoginModal = () => {
		setShowUserLogin(false);
	};
	const openLoginModal = isProfessional => {
		setShowUserLogin(true);
		const userTypeName = isProfessional ? "professional" : "user";
		setUserType(userTypeName);
	};

	return (
		<>
			<Navbar className="navbar" expand="lg">
				<Navbar.Brand href="/">
					<AiFillHome
						style={{
							width: "2rem",
							height: "2rem",
							color: "#03e9f4"
						}}
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className="navbarCollapse">
					<Nav className="mr-auto drop-menu ">
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
					<div inline>
						{isLoading && <Spinner className="spiner" animation="border" />}
						{!isAuthenticated && (
							<>
								<button onClick={() => openLoginModal(true)} className="botonUsuario">
									<GiStethoscope style={{ width: "1.8rem", height: "1.8rem" }} />
									Soy Profesional
								</button>
								<button onClick={() => openLoginModal(false)} className="botonUsuario">
									<BiUser style={{ width: "1.8rem", height: "1.8rem" }} />
									Soy Paciente
								</button>
								<LoginUser userType={userType} show={showUserLogin} onHide={closeLoginModal} />
							</>
						)}
					</div>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default Navigation;
