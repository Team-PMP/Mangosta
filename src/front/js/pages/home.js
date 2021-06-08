import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

import { Profile } from "../component/profile/profile";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Landing Page</h1>
			{/* <Profile /> */}
		</div>
	);
};
