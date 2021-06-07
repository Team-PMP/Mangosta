import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { LogoutIcon } from "../logout/logout-icon";
import "./styles.css";

export const userMenu = () => {
	const basename = process.env.BASENAME || "";
	return (
		<div className="Container">
			<BrowserRouter basename={basename}>
				<div className="frame">
					<Switch>
						<Link exact to="/perfil">
							<span>Perfil</span>
						</Link>
					</Switch>
					<span>
						<LogoutIcon />
					</span>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default userMenu;
