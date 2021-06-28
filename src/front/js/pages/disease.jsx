import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
/* import ProfesionalImage from "../../img/profesionales.png"; */
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../store/appContext";
import "../../styles/disease.scss";
//Components
import PostCard from "../component/postCard/postCard";

export const Disease = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	console.log(id);
	console.log(store.currentDisease.name);

	useEffect(
		() => {
			actions.getCurrentDisease(id);
		},
		[id]
	);
	return (
		<Container style={{ paddingTop: "150px" }}>
			{/* Stack the columns on mobile by making one full-width and the other half-width */}
			<Row className="firstRow justify-content-md-center">
				<Col className="firstCol" xs={12} md={8}>
					<h1 className="diseaseName">{store.currentDisease.name}</h1>
				</Col>
				<Col xs={12} md={4} className="imgCol">
					<img className="diseaseImg" src={store.currentDisease.image} alt="" />
				</Col>
			</Row>

			{/* Columns are always 50% wide, on mobile and desktop */}
			<Row>
				<Col xs={12} md={8} className="textCol">
					{store.currentDisease.information}
				</Col>
			</Row>
			{/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
			<Row className="postRow">
				{/* <Col xs={6} md={4}>
					xs=6 md=4
				</Col>
				<Col xs={6} md={4}>
					xs=6 md=4
				</Col>
				<Col xs={6} md={4}>
					xs=6 md=4
				</Col> */}
			</Row>
			<Row className="buttonRow">
				<Col xs={12} md={8}>
					<h1>NEW POST</h1>
					<hr />
					<div className="mb-3">
						<div className="form-group">
							<label>Nombre</label>
							<input type="text" className="form-control" id="name" placeholder="Enter Your Name" />
						</div>

						<div className="form-group">
							<label>Post</label>
							<input
								type="text"
								className="form-control"
								id="name"
								placeholder="Escribe tu articulo aqui"
							/>
						</div>
						<button className="btn btn-primary" onClick="submit_entry();">
							Guardar
						</button>
					</div>
				</Col>
			</Row>
		</Container>
	);
};
