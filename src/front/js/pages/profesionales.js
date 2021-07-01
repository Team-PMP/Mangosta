import React, { useContext, useEffect, useState } from "react";
import ProfesionalImage from "../../img/profesionales.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../store/appContext";
import "../../styles/profesionales.scss";
//Components

export const Profesionales = () => {
	const { store, actions } = useContext(Context);
	const { bring, setBring } = useState(0);

	// useEffect(() => {
	// 	actions.getProfessionals();
	// 	// console.log(getProfessionals());
	// }, []);
	const user = [
		{
			name: "Francisco",
			surname: "Gómez",
			email: "francisco@gmail.com",
			phone: "645 654 645",
			specialtie: "endocrinología"
		},
		{
			name: "Lorena",
			surname: "Dominguez",
			email: "lorena@gmail.com",
			phone: "645 654 444",
			specialtie: "dermatología"
		}
	];
	// const ProfessionalsList = store.professionals.map((prof, i) => {
	// 	const { name, surname, email, phone, specialties } = prof;
	return (
		<>
			<div>
				{user.map(item => (
					<div key={item}>
						<span>{item.name}</span>
						<span>{item.surname}</span>
						<span>{item.email}</span>
						<span>{item.phone}</span>
						<span>{item.specialties}</span>
					</div>
				))}
			</div>
		</>
	);
};
