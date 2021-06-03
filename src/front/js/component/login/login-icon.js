import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./styles.css";

export const LoginIcon = () => {
	const { loginWithPopup } = useAuth0();

	return (
		<div>
			<button className="login-icon" onClick={() => loginWithPopup()}>
				Login
			</button>
		</div>
	);
};
