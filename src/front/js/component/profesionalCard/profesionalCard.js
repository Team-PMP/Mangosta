import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Context } from "../store/appContext";
import "./styles.scss";

export const ProfesionalCard = props => {
	// const { store, actions } = useContext(Context);

	return (
		<>
			<div className="cardContainer">
				<div className="pictureCard" />
				<div className="cardInfo">
					<span>
						Nombre
						{props.name}
					</span>
					<span>
						Profesion
						{props.profesion}
					</span>
					<span>
						Ultima conexión
						{props.lastConection}
					</span>
				</div>
			</div>
		</>
	);
};

export default ProfesionalCard;
