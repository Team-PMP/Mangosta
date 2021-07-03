import React, { useState, useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Context } from "../store/appContext";
import "../../styles/perfil.scss";
////
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DefaultPhoto from "../../img/user-profile-image.png";

export const Perfil = () => {
	const { store, actions } = useContext(Context);
	console.log("user data", store.user);
	// const { user, isAuthenticated, isLoading } = useAuth0();

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				alignItems: "center",
				paddingTop: "100px"
			}}
			className="content">
			<div className="container-profile">
				<Tabs defaultActiveKey="profile" transition={false} id="noanim-tab-example" className="mb-3">
					<Tab eventKey="profile" title="Perfil">
						<div className="perfil-div">
							<img src={DefaultPhoto} className="profile-photo" />
							<span className="name">{`${store.user.name} ${store.user.surname} `}</span>
							<span>{store.user.email}</span>
						</div>
					</Tab>
					<Tab eventKey="favorites" title="Favoritos">
						<h1>favoritos</h1>
					</Tab>
				</Tabs>
			</div>
		</div>
	);
};
