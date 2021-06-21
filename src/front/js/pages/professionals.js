import React, { useContext } from "react";
import ProfesionalImage from "../../img/profesionales.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../store/appContext";
import "../../styles/profesionales.scss";
//Components
import ProfesionalCard from "../component/profesionalCard/profesionalCard";

export const Professionals = () => {
	const { store, actions } = useContext(Context);
	const [btnClassEndocrinología, setBtnClassEndocrinología] = useState("");
	const [btnClassDermatología, setBtnClassDermatología] = useState("");
	const [btnClassRehumatología, setBtnClassRehumatología] = useState("");

	const handleClickEndocrinología = () => {
		setBtnClassEndocrinología("getProfessionals");
	};

	const handleClickDermatología = () => {
		setBtnClassDermatología("");
	};

	const handleClickRehumatología = () => {
		setBtnClassRehumatología("");
	};

	return (
		<>
			<div className="father">
				<div>
					<img href="https://i.pinimg.com/564x/87/f3/2a/87f32ac7239b4721c22c92b94fb52a40.jpg" />
				</div>
				<div>
					<button
						onClick={handleClickEndocrinología}
						className={`endocrinología ${btnClassEndocrinología}`}
					/>
					<button onClick={handleClickDermatología} className={`dermatología ${btnClassDermatología}`} />
					<button
						onClick={handleClickRehumatología}
						className={`rehumatología ${btnClassRehumatología}`}
					/>-{" "}
				</div>
			</div>
		</>
	);
};
