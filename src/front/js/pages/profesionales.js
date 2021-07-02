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
		// {
		// 	name: "Francisco",
		// 	surname: "Gómez",
		// 	email: "francisco@gmail.com",
		// 	phone: "645 654 645",
		// 	specialtie: "endocrinología"
		// },
		// {
		// 	name: "Lorena",
		// 	surname: "Dominguez",
		// 	email: "lorena@gmail.com",
		// 	phone: "645 654 444",
		// 	specialtie: "dermatología"
		// }
	];
	// const ProfessionalsList = store.professionals.map((prof, i) => {
	// 	const { name, surname, email, phone, specialties } = prof;
	return (
		<>
			<div className="header">
				{user.map(item => (
					<div className="card" key={item}>
						<span className="name">{item.name}</span>
						<span className="surname">{item.surname}</span>
						<span className="email">{item.email}</span>
						<span className="phone">{item.phone}</span>
						<span className="specialties">{item.specialties}</span>
					</div>
				))}
			</div>
		</>
	);
};
