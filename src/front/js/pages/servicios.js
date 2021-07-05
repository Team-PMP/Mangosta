import React, { useContext } from "react";
import ProfesionalImage from "../../img/profesionales.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../store/appContext";
import "../../styles/servicios.scss";
import ReactBootstrap, { Button, Card, CardDeck, Image, Container, Row, Col } from "react-bootstrap";
import Yoga from "../../img/yoga.png";
import Meditacion from "../../img/meditacion.png";
import Alimentacion from "../../img/alimentacion.png";
import Chinamedicina from "../../img/China-medicina.png";
import Bro from "../../img/bro.png";
//Components

export const Servicios = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container-servicios">
				<div style={{ paddingTop: "150px" }}>
					<div className="cardDeck  text-center">
						<div>
							<img src={Yoga} className="serviciosImage" />
							<div className="link">
								<a href="https://www.gaia.com/">YOGA</a>
							</div>
						</div>
						<div>
							<img src={Meditacion} className="serviciosImage" />
							<div className="link">
								<a href="http://www.centrotaozen.es/">MEDITACIÓN</a>
							</div>
						</div>
						<div>
							<img src={Alimentacion} className="serviciosImage" />
							<div className="link">
								<a href="https://rodrigoruiz.es/">ALIMENTACIÓN</a>
							</div>
						</div>
					</div>

					<div className="col-12 p-3 mb-2 text-blue text-center">
						<div className="cardDeck">
							<div>
								<img src={Chinamedicina} className="serviciosImage" />
								<div className="link">
									<a href="https://www.ecco-verde.es/">MEDICINA CHINA</a>
								</div>
							</div>
							<div>
								<img src={Bro} className="serviciosImage" />
								<div className="link">
									<a href="https://www.gaia.com/">CLASES DE MEDITACIÓN</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
