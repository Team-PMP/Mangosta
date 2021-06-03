import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import "bootstrap/dist/css/bootstrap.min.css";

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
					<img src="https://picsum.photos/200/300" />
				</div>
			</div>

			<div className="workContainer">
				<div className="statement">
					<h2>¿Nuevo en Autodoctor?</h2>
					<p>Conecta con los mejores profesionales y la mejor comunidad en unos sencillos pasos</p>
				</div>
				<div className="card-group">
					<div className="card">
						<img className="card-img-top" src="https://ibb.co/ckmyH8C" alt="Card image cap" />
						<div className="card-body">
							<p className="card-text">Create una cuenta o haz login.</p>
						</div>
					</div>
					<div className="card">
						<img className="card-img-top" src="..." alt="Card image cap" />
						<div className="card-body">
							<p className="card-text">Encuentra el profesional que más se adapte a tí.</p>
						</div>
					</div>
					<div className="card">
						<img className="card-img-top" src="..." alt="Card image cap" />
						<div className="card-body">
							<p className="card-text">Te ayudaran con tus problemas.</p>
						</div>
					</div>
				</div>
			</div>

			<div className="resourcesContainer">
				<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
					<ol className="carousel-indicators">
						<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
						<li data-target="#carouselExampleIndicators" data-slide-to="1" />
						<li data-target="#carouselExampleIndicators" data-slide-to="2" />
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img className="d-block w-100" src="..." alt="First slide" />
						</div>
						<div className="carousel-item">
							<img className="d-block w-100" src="..." alt="Second slide" />
						</div>
						<div className="carousel-item">
							<img className="d-block w-100" src="..." alt="Third slide" />
						</div>
					</div>
					<a
						className="carousel-control-prev"
						href="#carouselExampleIndicators"
						role="button"
						data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true" />
						<span className="sr-only">Previous</span>
					</a>
					<a
						className="carousel-control-next"
						href="#carouselExampleIndicators"
						role="button"
						data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true" />
						<span className="sr-only">Next</span>
					</a>
				</div>
			</div>
		</>
	);
};
