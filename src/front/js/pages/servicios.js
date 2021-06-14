import React, { useContext } from "react";
import ProfesionalImage from "../../img/profesionales.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../store/appContext";
import "../../styles/servicios.scss";
//Components

export const Servicios = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="serviciosContainer">
				<div className="divCenter">
					<h1>
						Los mejores tratamientos de <strong>profesionales</strong> para <strong>pacientes.</strong>
					</h1>
				</div>
				<div className="wrapper">
					<h1>wdd</h1>
					<h1>dwd</h1>
				</div>
			</div>
		</>
	);
};
