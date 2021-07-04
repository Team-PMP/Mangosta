import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactBootstrap, { Button, Card, CardDeck, Image, Container, Row, Col } from "react-bootstrap";
import Homehero from "../../img/homehero.png";
import Home1 from "../../img/home1.png";
import Home2 from "../../img/home2.png";
import Home3 from "../../img/home3.png";
import Logo from "../../img/logo.png";
import { Profile } from "../component/profile/profile";
import { Carousel } from "../component/carousel/carousel";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="background">
			<div className="Tittle" style={{ paddingTop: "100px" }}>
				El <strong>google</strong> de las enfermedades <strong>autoinmunes</strong>
			</div>
			<img src={Homehero} width="500px" height="500px" className="heroImage" />
			<div className="Text">
				<Card.Text>
					Un portal que acerca los profesionales a los que estan en búsqueda de ayuda. Nos encargamos que
					todos nuestros usuarios ya sea <span>profesionales</span> o <span>pacientes</span>, tenga un trato
					rapido, eficaz y satisfactorio. <br />
					<strong>¡Disfruta de todas nuestras ventajas!</strong>
				</Card.Text>
			</div>

			{/* HEADER */}
			<div className="container-fluid" style={{ marginTop: "20rem" }}>
				<div className="header">
					<h1>¿Nuevo en Autodoctor?</h1>
					<p>Conecta con los mejores profesionales y la mejor comunidad en unos sencillos pasos</p>
				</div>

				{/* BODY-CARDS */}
				<div className="col-12 mb-2  deck">
					<CardDeck>
						<div className="explain-card">
							<img src={Home1} />
							<span className="text-info">Create una cuenta o haz login.</span>
						</div>
						<div className="explain-card">
							<img src={Home2} />
							<span className="text-info">Encuentra el profesional que se adapte a ti.</span>
						</div>
						<div className="explain-card">
							<img src={Home3} />
							<span className="text-info">Te ayudarán con tus problemas.</span>
						</div>
					</CardDeck>
				</div>
			</div>

			{/* CAROUSEL */}
			<Carousel />
		</div>
	);
};
