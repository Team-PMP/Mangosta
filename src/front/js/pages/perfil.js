import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Context } from "../store/appContext";
import "../../styles/perfil.scss";
////
export const Perfil = () => {
	const { store, actions } = useContext(Context);
	const { user, isAuthenticated, isLoading } = useAuth0();

	console.log("user perfil", user);

	return (
		isAuthenticated && (
			<div className="container">
				<div className="pestañaPerfil active">
					<span>Perfil</span>
				</div>
				<div className="pestañaFavoritos">
					<span>Favoritos</span>
				</div>
				<div className="headerInfo">
					<img src={user.picture} className="picture" />
					<div className="roles">
						<div>
							<input type="radio" id="huey" name="drone" value="huey" checked />
							<label>Profesional</label>
						</div>
						<div>
							<input type="radio" id="huey" name="drone" value="huey" checked />
							<label>Usuario/Paciente</label>
						</div>
					</div>
				</div>
				<div className="info">
					<span>Nombre: {user.name}</span>
					<span>Email: {user.email}</span>
					<span>
						RRSS: <input type="text" />
					</span>
					<span>
						Movil: <input type="text" />
					</span>
					<div className="boton">
						<button>Guardar</button>
					</div>
				</div>
			</div>
		)
	);
};
