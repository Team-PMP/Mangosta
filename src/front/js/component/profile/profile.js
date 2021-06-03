import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "react-bootstrap/Spinner";

export const Profile = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();
	console.log("user info", user);

	if (isLoading) {
		return <Spinner animation="border" />;
	}
	return (
		isAuthenticated && (
			<div>
				<img src={user.picture} alt={user.name} />
				<h2>{user.name}</h2>
			</div>
		)
	);
};
