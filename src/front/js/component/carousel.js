import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";

export default props => {
	const [sliderRef] = useKeenSlider({
		slidesPerView: 3,
		mode: "free",
		spacing: 15,
		loop: true
	});

	return (
		<div ref={sliderRef} className="keen-slider">
			<div className="keen-slider__slide number-slide1">
				<img href="https://m.media-amazon.com/images/I/71bZLS2ravL._AC_UY218_.jpg">
					<a href="https://www.amazon.es/Enfermedades-autoinmunes-dieta-antiinflamatoria-Anti-inflammatory/dp/1792605439/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2S49QYQBYVXK0&dchild=1&keywords=enfermedades+autoinmunes&qid=1625341633&s=books&sprefix=enfermedades+a%2Cstripbooks%2C168&sr=1-2" />
				</img>
			</div>
			<div className="keen-slider__slide number-slide2">
				<img href="https://m.media-amazon.com/images/I/612Z5stjytL._AC_UY218_.jpg" />
			</div>
			<div className="keen-slider__slide number-slide3">
				<img href="https://m.media-amazon.com/images/I/711fP70P4JL._AC_UY218_.jpg" />
			</div>
			<div className="keen-slider__slide number-slide4">
				<img href="https://m.media-amazon.com/images/I/61F8azhl1lL._AC_UY218_.jpg" />
			</div>
			<div className="keen-slider__slide number-slide5">
				<img href="https://m.media-amazon.com/images/I/71eSq8eWxhL._AC_UY218_.jpg" />
			</div>
			<div className="keen-slider__slide number-slide6">
				<img href="https://m.media-amazon.com/images/I/71KYip4oScS._AC_UY218_.jpg" />
			</div>
		</div>
	);
};
