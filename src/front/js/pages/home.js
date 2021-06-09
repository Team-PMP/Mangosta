import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactBootstrap, { Button, Card, CardDeck, Carousel, Image, Container, Row, Col } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			{/* JUMBOTRON */}

			<Card className="bg-dark text-white">
				<Card.Img
					src="https://img.freepik.com/vector-gratis/fondo-innovacion-medica-patron-icono-salud_115579-738.jpg?size=626&ext=jpg"
					alt="Card image"
				/>
				<Card.ImgOverlay>
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
			</Card>

			{/* BODY-CARDS */}

			<div className="container">
				<div className="row card-group">
					<div className="col-12 header">
						<h2>¿Nuevo en Autodoctor?</h2>
						<p>Conecta con los mejores profesionales y la mejor comunidad en unos sencillos pasos</p>
					</div>
					<div className="col-12 ">
						<CardDeck>
							<Card>
								<Card.Img
									variant="top"
									src="https://www.publicdomainpictures.net/pictures/210000/nahled/doctor-1490804718D0I.jpg"
								/>
								<Card.Body>
									<Card.Text>Create una cuenta o haz login.</Card.Text>
								</Card.Body>
							</Card>
							<Card>
								<Card.Img
									variant="top"
									src="https://es-static.z-dn.net/files/d74/0ec77e9c549e94effa17353fba8be215.png"
								/>
								<Card.Body>
									<Card.Text>Encuentra el profesional que más se adapte a ti.</Card.Text>
								</Card.Body>
							</Card>
							<Card>
								<Card.Img
									variant="top"
									src="https://definicion.de/wp-content/uploads/2009/05/doctor.jpg"
								/>
								<Card.Body>
									<Card.Text>Te ayudarán con tus problemas.</Card.Text>
								</Card.Body>
							</Card>
						</CardDeck>
					</div>
				</div>

				{/* CAROUSEL */}

				<div className="row">
					<div className="col-8 mx-auto d-block">
						<Carousel variant="dark">
							<Carousel.Item>
								<img
									className="d-block w-100"
									src="https://imagessl2.casadellibro.com/a/l/t5/22/9788441436022.jpg"
									alt="First slide"
								/>
								<Carousel.Caption>
									<h5>LA SOLUCIÓN AUTOINMUNE</h5>
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
								/>
								<Carousel.Caption>
									<h5>LA CURACIÓN AUTOINMUNE</h5>
									<a href="https://www.casadellibro.com/libro-la-curacion-autoinmune/9788418000386/11395322?gclid=Cj0KCQjwnueFBhChARIsAPu3YkT8pIhNkzq4daIMr7GOXQAburDjFwb06WTbNx4S9YBOm1VGkgQ-pj8aAj7aEALw_wcB">
										PINCHA AQUÍ
									</a>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src="https://www.zerca.com/medias/salud-prohibida-incurable-era-ayer-andreas-L-kalcker-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMDUwODV8aW1hZ2UvanBlZ3xpbWFnZXMvaGFmL2g1MC85MDQ4Mzg3Mjg5MTE4LmpwZ3xjMDBjZDlhMjhlMmE1MmUwNzczZGIxMWQwYzI2MDdjNWVmNWRlMGI2ZGMyM2MzOWNlMTdhNWI4MzNkNWNlNGVl"
									alt="Third slide"
								/>
								<Carousel.Caption>
									<h5>SALUD PROHIBIDA</h5>
									<a href="https://www.zerca.com/libreria-y-papeleria/libro-salud-prohibida-incurable-era-ayer---andreas-ludwig-kalcker/p/lial-1604059569823?gclid=Cj0KCQjwnueFBhChARIsAPu3YkShdUERNyetNPrzpqtYqEXrMcLTQwY5r7LhM_uEiWkFA8KB0dsQBk8aAhXbEALw_wcB">
										PINCHA AQUÍ
									</a>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</div>
				</div>
			</div>
		</>
	);
};
