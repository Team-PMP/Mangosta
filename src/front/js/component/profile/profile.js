import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "react-bootstrap/Spinner";
import { LogoutIcon } from "../logout/logout-icon";
import UserMenu from "../userMenu/userMenu";
import "./styles.css";

export const Profile = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();
	console.log("user info", user);

	const [showMiniMenu, setShowMiniMenu] = useState(false);

	const handleClick = () => {
		setShowMiniMenu(!showMiniMenu);
	};

	// if (isLoading) {
	// 	return <Spinner animation="border"/>;
	// }
	return (
		isAuthenticated && (
			<div className="nav-profile-container">
				<img src={user.picture} className="mini-profile" alt={user.name} onClick={handleClick} />
				{showMiniMenu ? <UserMenu /> : null}
			</div>
		)
	);
};
