import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactBootstrap, { Button, Card, CardDeck, Carousel } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-8">
						<h1>¿Quienes somos?</h1>
						<p>
							Somos el google de la enfermedades autoinmunes, una red social que acerca los profesionales
							a los que estan en busqueda de ayuda tan valiosa como la suya.
						</p>
						<p>
							Nos encargamos que todos nuestros usuarios ya sea profesional o paciente, tenga un trato
							rapido, eficaz y staisfastorio.
						</p>
					</div>
					<div className="col-12 col-sm-4">
						<img
							className="img1 mx-auto d-block"
							src="data:image/jpeg;base64,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"
						/>
					</div>
				</div>

				<div className="row card-group">
					<div className="col-12">
						<h2>¿Nuevo en Autodoctor?</h2>
						<p>Conecta con los mejores profesionales y la mejor comunidad en unos sencillos pasos</p>
					</div>
					<div className="col-12 ">
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
