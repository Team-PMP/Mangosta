import React, { useState, useContext, useEffect } from "react";
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
	const [image, setImage] = useState("");
	const [title, setTitle] = useState("");
	const [info, setInfo] = useState("");

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
	console.log(store);
	const submit_entry = () => {
		const post = {
			image: image,
			title: title,
			info: info,
			user_id: 2,
			disease_id: id
		};
		actions.createPost(post);
	};

	return (
		<div className="backgroundAll">
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
					<Col xs={12} md={12} className="postColTitle">
						<h2>Mas informaci??n acerca de esta enfermedad</h2>
					</Col>
					<Col xs={12} md={12} className="postCol">
						{postsList}
					</Col>
				</Row>
				<Row className="buttonRow">
					<Col xs={12} md={8}>
						<h3 style={{ paddingTop: "10px" }}>NEW POST</h3>
						<hr />
						<div className="mb-3">
							<div className="form-group">
								<label>Titulo</label>
								<input
									type="text"
									className="form-control"
									id="title"
									placeholder="Escribe el titulo de tu post"
									value={title}
									onChange={event => setTitle(event.target.value)}
								/>
							</div>

							<div className="form-group">
								<label>Imagen del post</label>
								<input
									type="text"
									className="form-control"
									id="image"
									placeholder="Url de la imagen (menos de 120 caracteres)"
									value={image}
									onChange={event => setImage(event.target.value)}
								/>
							</div>

							<div className="form-group">
								<label>Post</label>
								<textarea
									rows="4"
									cols="50"
									type="text"
									className="form-control"
									id="info"
									placeholder="Escribe tu articulo aqu??"
									value={info}
									onChange={event => setInfo(event.target.value)}
								/>
							</div>
							<button className="btn btn-primary" onClick={submit_entry}>
								Postear
							</button>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
