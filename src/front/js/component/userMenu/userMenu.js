import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { LogoutIcon } from "../logout/logout-icon";
import "./styles.css";

export const userMenu = () => {
	const basename = process.env.BASENAME || "";
	return (
		<div className="Container">
			<div className="frame">
				<a href="/perfil">Perfil</a>
				<LogoutIcon />
			</div>
		</div>
	);
};

export default userMenu;
