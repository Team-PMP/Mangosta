import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FcGoogle } from "react-icons/fcle";
import "./styles.css";

export const LoginGoogle = () => {
	const { loginWithPopup, loginWithRedirect } = useAuth0();

	return (
		<div>
			<button className="login-icon" onClick={loginWithPopup}>
			<FcGoogle style={{ width: "1.8rem", height: "1.8rem" }}/>Inicia con Googleee
			</button>
		</div>
	);
};
