import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactBootstrap, { Button, Card, CardDeck, Carousel } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="headerContainer">
				<div className="information">
					<h1>¿Quienes somos?</h1>
					<p>
						Somos el google de la enfermedades autoinmunes, una red social que acerca los profesionales a
						los que estan en busqueda de ayuda tan valiosa como la suya.
					</p>
					<p>
						Nos encargamos que todos nuestros usuarios ya sea profesional o paciente, tenga un trato rapido,
						eficaz y staisfastorio.
					</p>
				</div>
				<div className="imgInformation">
					<img src="https://picsum.photos/200" />
				</div>
			</div>

			<div className="workContainer">
				<div className="statement">
					<h2>¿Nuevo en Autodoctor?</h2>
					<p>Conecta con los mejores profesionales y la mejor comunidad en unos sencillos pasos</p>
				</div>
				<div className="card-group">
					<CardDeck>
						<Card>
							<Card.Img variant="top" src="https://picsum.photos/200" />
							<Card.Body>
								<Card.Text>Create una cuenta o haz login.</Card.Text>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img
								variant="top"
								src="https://picsum.photos/200
"
							/>
							<Card.Body>
								<Card.Text>Encuentra el profesional que más se adapte a ti.</Card.Text>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img variant="top" src="https://picsum.photos/200" />
							<Card.Body>
								<Card.Text>Te ayudarán con tus problemas.</Card.Text>
							</Card.Body>
						</Card>
					</CardDeck>
				</div>
			</div>

			<div className="resourcesContainer">
				<Carousel variant="dark">
					<Carousel.Item>
						<img className="d-block w-100" src="https://picsum.photos/200" alt="First slide" />
						<Carousel.Caption>
							<h5>First slide label</h5>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src="https://picsum.photos/200" alt="Second slide" />
						<Carousel.Caption>
							<h5>Second slide label</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src="https://picsum.photos/200" alt="Third slide" />
						<Carousel.Caption>
							<h5>Third slide label</h5>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		</>
	);
};
