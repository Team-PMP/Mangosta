import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";

export const Carousel = () => {
	const [sliderRef] = useKeenSlider({
		slidesPerView: 3,
		mode: "free",
		spacing: 15,
		loop: true
	});

	return (
		<div ref={sliderRef} className="keen-slider">
			<div className="keen-slider__slide number-slide1">
				<a href="https://www.amazon.es/Enfermedades-autoinmunes-dieta-antiinflamatoria-Anti-inflammatory/dp/1792605439/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2S49QYQBYVXK0&dchild=1&keywords=enfermedades+autoinmunes&qid=1625341633&s=books&sprefix=enfermedades+a%2Cstripbooks%2C168&sr=1-2">
					<img src="https://m.media-amazon.com/images/I/71bZLS2ravL._AC_UY218_.jpg" />
				</a>
			</div>
			<div className="keen-slider__slide number-slide2">
				<a href="https://www.amazon.es/Enfermedades-autoinmunes-sistemicas-incluye-versi%C3%B3n/dp/8491106529/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1CYYURJFV5HG2&dchild=1&keywords=enfermedades+autoinmunes&qid=1625475307&sprefix=enfermedades+a%2Caps%2C172&sr=8-1">
					<img src="https://m.media-amazon.com/images/I/612Z5stjytL._AC_UY218_.jpg" />
				</a>
			</div>
			<div className="keen-slider__slide number-slide3">
				<a href="https://www.amazon.es/curaci%C3%B3n-autoinmune-silencioso-autoinmunidad-enfermedad/dp/8418000384/ref=sr_1_4?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1CYYURJFV5HG2&dchild=1&keywords=enfermedades+autoinmunes&qid=1625475397&sprefix=enfermedades+a%2Caps%2C172&sr=8-4">
					<img src="https://m.media-amazon.com/images/I/711fP70P4JL._AC_UY218_.jpg" />
				</a>
			</div>
			<div className="keen-slider__slide number-slide4">
				<a href="https://www.amazon.es/Gu%C3%ADa-b%C3%A1sica-protocolo-autoinmune-paleo-ebook/dp/B07FF6VG8C/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1CYYURJFV5HG2&dchild=1&keywords=enfermedades+autoinmunes&qid=1625475397&sprefix=enfermedades+a%2Caps%2C172&sr=8-3">
					<img src="https://m.media-amazon.com/images/I/71ZwAWvqdLL._AC_UL320_.jpg" />
				</a>
			</div>
			<div className="keen-slider__slide number-slide5">
				<a href="https://www.amazon.es/Diagn%C3%B3stico-monitorizaci%C3%B3n-las-enfermedades-autoinmunes/dp/8491132449/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1CYYURJFV5HG2&dchild=1&keywords=enfermedades+autoinmunes&qid=1625475397&sprefix=enfermedades+a%2Caps%2C172&sr=8-5">
					<img src="https://m.media-amazon.com/images/I/61Gh27gsYeL._AC_UL320_.jpg" />
				</a>
			</div>
			<div className="keen-slider__slide number-slide6">
				<a href="https://www.amazon.es/Manual-laboratorio-enfermedades-autoinmunes-sist%C3%A9micas/dp/8494023497/ref=sr_1_10?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1CYYURJFV5HG2&dchild=1&keywords=enfermedades+autoinmunes&qid=1625475397&sprefix=enfermedades+a%2Caps%2C172&sr=8-10">
					<img src="https://images-na.ssl-images-amazon.com/images/I/51IRhb55etL._SY264_BO1,204,203,200_QL40_ML2_.jpg" />
				</a>
			</div>
		</div>
	);
};
