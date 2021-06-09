import React, { useContext } from "react";
import ProfesionalImage from "../../img/profesionales.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../store/appContext";
import "../../styles/profesionales.scss";
//Components

export const Servicios = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div>
				<h1>Servicios</h1>
			</div>
		</>
	);
};
