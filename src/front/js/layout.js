import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
//

import { Disease } from "./pages/disease.jsx";

import { Perfil } from "./pages/perfil";
import { Profesionales } from "./pages/profesionales";
import { Servicios } from "./pages/servicios";

import Navigation from "./component/navbar/navbar";
import { Footer } from "./component/footer";
import { ProfesionalSignin } from "./pages/profesional/profesionalSignin";
import { UserSignin } from "./pages/user/userSignin";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100 backgroundAll">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navigation />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/user/userSignin">
							<UserSignin />
						</Route>
						<Route exact path="/profesional/profesionalSignin">
							<ProfesionalSignin />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/disease/:id">
							<Disease />
						</Route>
						<Route exact path="/perfil">
							<Perfil />
						</Route>
						<Route exact path="/profesionales">
							<Profesionales />
						</Route>
						<Route exact path="/servicios">
							<Servicios />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1 style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
								Error 404! Página no encontrada! ☹️.
							</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
