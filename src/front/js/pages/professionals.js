import React, { useContext, useEffect, useState } from "react";
import ProfesionalImage from "../../img/profesionales.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../store/appContext";
import "../../styles/profesionales.scss";
import ReactBootstrap, { Button, Card, CardDeck, Image, Container, Row, Col } from "react-bootstrap";

//Components

export const Professionals = () => {
	const { store, actions } = useContext(Context);
	const { bring, setBring } = useState(0);

	useEffect(() => {
		actions.getProfessionals();
	}, []);

	const ProfessionalsList = store.professionals.map((prof, i) => {
		const { name, surname, email, phone, specialties } = prof;

		return (
			<div className="bodyPage">
				<div className="name">{name}</div>
				<div className="surname">{surname}</div>
				<div className="email">{email}</div>
				<div className="phone">{phone}</div>
				<div className="specialties">{specialties}</div>
			</div>
		);
	});
};
