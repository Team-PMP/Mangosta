import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactBootstrap, { Button, Card, CardDeck, Carousel, Image, Container, Row, Col } from "react-bootstrap";
import Homehero from "../../img/homehero.png";
import Home1 from "../../img/home1.png";
import Home2 from "../../img/home2.png";
import Home3 from "../../img/home3.png";
import Logo from "../../img/logo.png";
import { Profile } from "../component/profile/profile";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const token = localStorage.getItem("jwt-token");

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
			<div style={{ marginTop: "20rem" }}>
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

			<div className="row" style={{ marginTop: "100px" }}>
				<div className="carousel ">
					<Carousel variant="dark">
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="https://imagessl2.casadellibro.com/a/l/t5/22/9788441436022.jpg"
								alt="First slide"
								style={{ height: "500px" }}
							/>
							<Carousel.Caption>
								<a href="https://www.casadellibro.com/libro-la-solucion-autoinmune-prevenir-e-invertir-el-especto-de-sintomas-y-enfermedades-autoinmunes/9788441436022/2799632?gclid=Cj0KCQjwnueFBhChARIsAPu3YkSRXmFbl1I3J-omjd9PNwJz3uEzfCNGGuswj1wmQImncg93mXdE1TIaApVFEALw_wcB">
									PINCHA AQUÍ
								</a>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="https://imagessl2.casadellibro.com/a/l/t5/42/9788482987842.jpg"
								alt="Second slide"
								style={{ height: "500px" }}
							/>
							<Carousel.Caption>
								<a href="https://www.casadellibro.com/libro-la-curacion-autoinmune/9788418000386/11395322?gclid=Cj0KCQjwnueFBhChARIsAPu3YkT8pIhNkzq4daIMr7GOXQAburDjFwb06WTbNx4S9YBOm1VGkgQ-pj8aAj7aEALw_wcB">
									PINCHA AQUÍ
								</a>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="https://images-na.ssl-images-amazon.com/images/I/51wjQZQOgPL._SY264_BO1,204,203,200_QL40_ML2_.jpg"
								alt="Third slide"
								style={{ height: "500px" }}
							/>
							<Carousel.Caption>
								<a href="https://www.amazon.es/Alimenta-Cerebro-Sorprendente-Intestinal-Cerebrode/dp/1101969822">
									PINCHA AQUÍ
								</a>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
			</div>
		</div>
	);
};
