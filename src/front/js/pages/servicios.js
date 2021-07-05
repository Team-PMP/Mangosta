import React, { useContext } from "react";
import ProfesionalImage from "../../img/profesionales.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../store/appContext";
import "../../styles/profesionales.scss";
import ReactBootstrap, { Button, Card, CardDeck, Image, Container, Row, Col } from "react-bootstrap";

//Components

export const Servicios = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div style={{ paddingTop: "150px" }}>
				<div className="col-12 p-3 mb-2 text-blue text-center">
					<CardDeck>
						<Card className="border-0">
							<Card.Img
								variant="top"
								src="https://st.depositphotos.com/1361307/2975/i/600/depositphotos_29759483-stock-photo-yoga.jpg"
							/>
							<Card.Body>
								<Card.Title>YOGA</Card.Title>
								<Card.Link href="https://www.gaia.com/">CLASES DE YOGA</Card.Link>
							</Card.Body>
						</Card>
						<Card className="border-0">
							<Card.Img
								variant="top"
								src="https://www.figma.com/file/8NSNpxvTj9WVU9zsWmdZ6J/Dise%C3%B1o-PMP-version2.0?node-id=1%3A10995"
							/>
							<Card.Body>
								<Card.Title>ACUPUNTURA</Card.Title>
								<Card.Link href="http://www.centrotaozen.es/">CENTRO DE ACUPUNTURA</Card.Link>
							</Card.Body>
						</Card>
						<Card className="border-0">
							<Card.Img
								variant="top"
								src="https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2014/01/20/164721584.jpg"
							/>
							<Card.Body>
								<Card.Title>NATUROPATÍA Y HOMEOPATÍA</Card.Title>
								<Card.Link href="https://rodrigoruiz.es/">NATURÓPATA ONLINE</Card.Link>
							</Card.Body>
						</Card>
					</CardDeck>
				</div>
				<div className="col-12 p-3 mb-2 text-blue text-center">
					<CardDeck>
						<Card className="border-0">
							<Card.Img
								variant="top"
								src="https://i.pinimg.com/564x/7c/67/d7/7c67d769a1a7de217b7d2c04187ece86.jpg"
							/>
							<Card.Body>
								<Card.Title>SUPLEMENTACIÓN</Card.Title>
								<Card.Link href="https://www.ecco-verde.es/">TIENDA ONLINE</Card.Link>
							</Card.Body>
						</Card>
						<Card className="border-0">
							<Card.Img
								variant="top"
								src="https://i.pinimg.com/originals/27/48/3d/27483d4602745ac914e49372ffb10b78.jpg"
							/>
							<Card.Body>
								<Card.Title>NUTRICIÓN</Card.Title>
								<Card.Link href="https://tudietista.es/">
									DIETISTAS ESPECIALIZADOS EN DIETA PALEO
								</Card.Link>
							</Card.Body>
						</Card>
						<Card className="border-0">
							<Card.Img
								variant="top"
								src="https://i.pinimg.com/564x/6e/c8/f6/6ec8f6498907e6f567dd431fa42a9ecb.jpg"
							/>
							<Card.Body>
								<Card.Title>MEDITACIÓN</Card.Title>
								<Card.Link href="https://www.gaia.com/">CLASES DE MEDITACIÓN</Card.Link>
							</Card.Body>
						</Card>
					</CardDeck>
				</div>
			</div>
		</>
	);
};
