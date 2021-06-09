//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(
	<Auth0Provider
		domain="amcarvajal.eu.auth0.com"
		clientId="p01VMD0Qq110o99k84mCl6TXsqdQMgZK"
		redirectUri={window.location.origin}>
		<Router>
			<Layout />
		</Router>
	</Auth0Provider>,
	document.querySelector("#app")
);
