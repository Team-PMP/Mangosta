import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Context } from "../store/appContext";
import "../../styles/perfil.scss";
////
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DefaultPhoto from "../../img/user-profile-image.png";

export const Perfil = () => {
	const { store, actions } = useContext(Context);
	// const { user, isAuthenticated, isLoading } = useAuth0();
	const token = localStorage.getItem("jwt-token");
	// console.log("user perfil", store.user);

	useEffect(() => {
		actions.getcurrentUser();
	}, []);

	return (
		<div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
			{token && (
				<div className="container-profile">
					<Tabs defaultActiveKey="profile" transition={false} id="noanim-tab-example" className="mb-3">
						<Tab eventKey="profile" title="Perfil">
							<div className="perfil-div">
								<img src={DefaultPhoto} className="profile-photo" />
								<span>Nombre</span>
								<span>Email</span>
								<span>
									Movil
									<input />
								</span>
								<button>Guardar</button>
							</div>
						</Tab>
						<Tab eventKey="favorites" title="Favoritos">
							<h1>favoritos</h1>
						</Tab>
					</Tabs>
				</div>
			)}
		</div>
	);
};
