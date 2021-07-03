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
import { Carousel } from "../component/carousel";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="background">
			{/* JUMBOTRON */}

			{/* <Card className="text-white">
				<Card.Img
					src="https://img.freepik.com/vector-gratis/fondo-innovacion-medica-patron-icono-salud_115579-738.jpg?size=626&ext=jpg"
					alt="Card image"
				/>
				<Card.ImgOverlay styles={{ marginTop: "100px" }}>
					<div className="Tittle">EL GOOGLE DE LAS ENFERMEDADES AUTOINMUNES</div>
					<div className="Text">
						<Card.Text>
							<br /> Una red social que acerca los profesionales
							<br /> a los que estan en búsqueda de ayuda
							<br />
							tan valiosa como la suya.
						</Card.Text>
						<Card.Text>
							Nos encargamos que todos nuestros usuarios
							<br /> ya sea profesional o paciente,
							<br /> tenga un trato rapido, eficaz y satisfactorio.
						</Card.Text>
						<Card.Text>
							Disfruta de todas nuestras ventajas.
							<br /> Conectamos salud.
						</Card.Text>
					</div>
				</Card.ImgOverlay>
			</Card> */}

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

			<Carousel></Carousel>
	);
};
