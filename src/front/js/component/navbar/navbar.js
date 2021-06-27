import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
//images
import Logo from "../../../img/logo.png";
import { AiFillHome } from "react-icons/ai";
import Spinner from "react-bootstrap/Spinner";
//
import { GiStethoscope } from "react-icons/gi";
import { BiUser } from "react-icons/bi";
import { Profile } from "../profile/profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Context } from "../../store/appContext";
/* import { LoginIcon } from "../login/login-icon"; */
/* import { LogoutIcon } from "../logout/logout-icon"; */

/* import UserMenu from "../userMenu/userMenu"; */
import { LoginUser } from "../loginUser/loginUser";
// import { LoginProfesional } from "../loginProfesional/loginProfesional";

import { useAuth0 } from "@auth0/auth0-react";
import "./styles.css";

const Navigation = () => {
	const { isLoading, isAuthenticated, user } = useAuth0();
	const [showUserLogin, setShowUserLogin] = useState(false);
	const [userType, setUserType] = useState("user");
	const { store, actions } = useContext(Context);
	/* token*/

	const token = localStorage.getItem("jwt-token");
	useEffect(() => {
		actions.getAllDiseases();
	}, []);

	const list = store.diseases.map((disease, i) => {
		const { id, name } = disease;
		const link = `/disease/${id}`;
		return (
			<NavDropdown.ItemText key={i.toString()}>
				<Link className="link" to={link}>
					{name}
				</Link>
			</NavDropdown.ItemText>
		);
	});

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
					<AiFillHome style={{ width: "2rem", height: "2rem" }} href="{{ url_for('main.profile') }}" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className="navbarCollapse">
					<Nav className="mr-auto ">
						<NavDropdown className="dropwdown" title="Enfermedades" id="basic-nav-dropdown">
							{list}
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
						{isLoading && <Spinner className="spiner" animation="border" />}
						{!token && (
							<>
								<Button variant="light" onClick={() => openLoginModal(true)} className="botonUsuario">
									<GiStethoscope style={{ width: "1.8rem", height: "1.8rem" }} />
									Soy Profesional
								</Button>
								<Button variant="light" onClick={() => openLoginModal(false)} className="botonUsuario">
									<BiUser style={{ width: "1.8rem", height: "1.8rem" }} />
									Soy Paciente
								</Button>
								<LoginUser userType={userType} show={showUserLogin} onHide={closeLoginModal} />
							</>
						)}
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default Navigation;
