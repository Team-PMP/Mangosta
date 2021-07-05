import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import "./Card.scss";
import { Link } from "react-router-dom";

function PostCard(props) {
	return (
		<div className="cardOutside">
			<img className="cardImg" variant="top" src={props.imgPost} />
			<div>
				<div className="cardTitle">
					<h2>{props.titlePost}</h2>
				</div>
				<div className="cardText">{props.textPost}</div>
			</div>
		</div>
	);
}
PostCard.propTypes = {
	titlePost: PropTypes.string,
	textPost: PropTypes.string,
	imgPost: PropTypes.string
};
export default PostCard;
