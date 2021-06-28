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
import PostCard from "../component/postCard/postCard.js";

export const Disease = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	console.log(id);
	console.log(store.currentDisease.name);
	const postsPrueba = [
		{
			title: "The Seven Deadly Sins",
			info: "cositas para probar",
			image: "https://picsum.photos/200"
		},
		{
			title: "The Seven Deadly Sins",
			info: "cositas para probar",
			image: "https://picsum.photos/200"
		},
		{
			title: "The Seven Deadly Sins",
			info: "cositas para probar",
			image: "https://picsum.photos/200"
		}
	];

	const postsList = store.latestPosts.map((post, i) => {
		const { title, info, image } = post;
		return <PostCard key={i.toString()} titlePost={title} textPost={info} imgPost={image} />;
	});

	useEffect(
		() => {
			actions.getCurrentDisease(id);
			actions.getLatestPosts(id);
		},
		[id]
	);
	return (
		<Container>
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
				<Col xs={12} md={12}>
					{postsList}
				</Col>
			</Row>
			<Row className="buttonRow">
				<Col xs={12} md={8}>
					<h3>NEW POST</h3>
					<hr />
					<div className="mb-3">
						<div className="form-group">
							<label>titulo</label>
							<input type="text" className="form-control" id="name" placeholder="titulo del post" />
						</div>

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
