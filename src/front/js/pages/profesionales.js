import React, { useContext } from "react";
import ProfesionalImage from "../../img/profesionales.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../store/appContext";
import "../../styles/profesionales.scss";
//Components
import ProfesionalCard from "../component/profesionalCard/profesionalCard";

export const Profesionales = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="text-center mt-5" style={{ paddingTop: "100px" }}>
				<h1>Encuentra tu profesional a solo un...</h1>
				<img src={ProfesionalImage} className="profesionalImage" />
			</div>
			<div className="contentProfesiones">
				<div className="cardProfesiones">
					<h3>Endocrinologoía</h3>
				</div>
				<div className="cardProfesiones">
					<h3>Inmunología</h3>
				</div>
				<div className="cardProfesiones">
					<h3>Digestivo</h3>
				</div>
				{/*<div className="cardProfesiones">
					<h3>Dermatología</h3>
				</div>
				<div className="cardProfesiones">
					<h3>Reumatología</h3>
				</div>
				<div className="cardProfesiones">
					<h3>Neurología</h3>
				</div> */}
			</div>
			<div className="contentProfesiones">
				<div className="cardProfesiones">
					<h3>Dermatología</h3>
				</div>
				<div className="cardProfesiones">
					<h3>Reumatología</h3>
				</div>
				<div className="cardProfesiones">
					<h3>Neurología</h3>
				</div>
			</div>
			<div className="contentProfesionales">
				<ProfesionalCard />
			</div>
		</>
	);
};
