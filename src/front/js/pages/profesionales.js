import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../store/appContext";
import "../../styles/profesionales.scss";
//Components

export const Profesionales = () => {
	const { store, actions } = useContext(Context);

	console.log("Porfessionals:", store.professionals);
	//este console.log te muestra los profesionales almacenados en la base de datos en la consola

	useEffect(() => {
		actions.getProfessionals();
	}, []);
	//useEffect que te hace el fetch

	return (
		<>
			<div className="backall">
				<div className="header">
					{/*  .map del STORE para traerte los profesionales dentro del store profesionales */}
					{store.professionals.map(item => (
						<div className="card" key={item.id}>
							<span className="name">
								{item.name} {item.surname}
							</span>
							{/* combino item.name con item.surname para que aparezca el nombre completo */}
							<span className="email">
								<a href={`mailto: ${item.email}`}>{item.email}</a>
							</span>
							{/*  este href hace que si haces click se abra gmail para enviar un email a esta persona sin necesidad de copiar el correro */}
							<span className="phone">{item.phone}</span>
							<span className="specialties">{item.specialties}</span>
						</div>
					))}
				</div>
			</div>

			{/*  OJO! tienes que meter algun profesional manualmente en la base de datos o registar alguno por la web, sino no te aparecerá ninguno */}
		</>
	);
};
