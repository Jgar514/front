import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "./styles.css";

const Projects = () => {
	const [sliderRef] = useKeenSlider({
		slides: {
			perView: 2.5,
			spacing: 15,
		},
	});
	return (
		<div>
			<div ref={sliderRef} className="keen-slider ">
				<div className="keen-slider__slide number-slide1">1</div>
				<div className="keen-slider__slide number-slide2">2</div>
				<div className="keen-slider__slide number-slide3">3</div>
				<div className="keen-slider__slide number-slide4">4</div>
				<div className="keen-slider__slide number-slide5">5</div>
				<div className="keen-slider__slide number-slide6">6</div>
			</div>
		</div>
	);
};

export default Projects;
