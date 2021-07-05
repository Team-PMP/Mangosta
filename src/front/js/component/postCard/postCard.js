import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import "./Card.scss";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function PostCard(props) {
	return (
		<Card style={{ width: "33%" }}>
			<Card.Img variant="top" src={props.imgPost} />
			<Card.Body>
				<Card.Title>{props.titlePost}</Card.Title>
				<Card.Text>{props.textPost}</Card.Text>
				<Button variant="primary">Ampliar</Button>
			</Card.Body>
		</Card>
	);
}
PostCard.propTypes = {
	titlePost: PropTypes.string,
	textPost: PropTypes.string,
	imgPost: PropTypes.string
};
export default PostCard;
