import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

import "../../styles/footer.scss";

export const Footer = () => {
	return (
		<div className="footer-container">
			<footer className="footer">
				<div>
					<ul>
						<li className="small">
							<a>Politica privacidad</a>
						</li>
						<li className="small">
							<a>Terminos y condiciones</a>
						</li>
					</ul>
				</div>
				<div className="copy">
					<span>&copy; 2021 Auto-Doctor</span>
				</div>
				<div>
					<ul>
						<li>
							<FaFacebookSquare className="icon" />
							<a>Facebook</a>
						</li>
						<li>
							<FaTelegramPlane className="icon" />
							<a>Telegram</a>
						</li>
						<li>
							<BiMailSend className="icon" />
							<a href="mailto:support@autoDoctor.com">Contacto</a>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
};
