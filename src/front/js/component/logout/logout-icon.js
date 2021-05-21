import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./styles.css";

export const LogoutIcon = () => {
	const { logout } = useAuth0();

	return (
		<button className="logout-icon" onClick={() => logout({ returnTo: window.location.origin })}>
			Logout
		</button>
	);
};
