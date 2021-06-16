import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Context } from "../store/appContext";
import "../../styles/perfil.scss";
////
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export const Perfil = () => {
	const { store, actions } = useContext(Context);
	const { user, isAuthenticated, isLoading } = useAuth0();

	console.log("user perfil", user);

	return (
		isAuthenticated && (
			<div className="container">
				<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
					<Tab eventKey="profile" title="Perfil">
						<div className="headerInfo">
							<img src={user.picture} className="picture" />
							<div className="info">
								<span className="userName">{user.name}</span>
								<span className="userEmail">{user.email}</span>
							</div>
						</div>
					</Tab>
					<Tab eventKey="favorites" title="Favoritos">
						<h1>Favoritos</h1>
					</Tab>
				</Tabs>
			</div>
		)
	);
};
