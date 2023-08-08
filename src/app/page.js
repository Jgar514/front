"use client";

import React from "react";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import web1 from "/public/josh.jpeg";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import "./styles.css";

export default function Home() {
	// const [sliderRef, instanceRef] = useKeenSlider(
	// 	{
	// 		slideChanged() {
	// 			console.log("slide changed");
	// 		},
	// 	},
	// 	[
	// 		// add plugins here
	// 	]
	// );
	const [sliderRef] = useKeenSlider({
		slides: {
			perView: 2.5,
			spacing: 15,
		},
	});
	return (
		<div>
			<main className=" bg-blue-700">
				<section className="h-screen overflow-hidden">
					<nav className="bg-white pt-8 px-3 mb-6 flex justify-between ">
						<h1 className="text-xl font-burtons pb-3">Hello World</h1>
						<ul className="flex items-center">
							<li>
								<BsFillMoonStarsFill className="cursor-pointer pb-4 text-5xl" />
							</li>
							{/* <li>
								<a className="bg-cyan-500 text-white px-4 py-2 rounded" href="#">
									Resume
								</a>
							</li> */}
						</ul>
					</nav>
					<div className="flex flex-col  bg-black z-1 px-2">
						<div className="bg-yellow-300 flex flex-row gap-5 items-center ">
							<Image className="rounded-full bg-white h-auto w-1/5 border-4 border-black  " width={90} height={90} src={web1} alt="idk" />
							<div className="flex flex-column  gap-1">
								<div className="w-full mt-2 mr-3">
									<h1 className="py-1 bg-green-300 text-xl  font-bold">Joshua Garvey</h1>
								</div>
								<div className="w-2/5 mt-5 bg-white py-3 ">
									<a className="bg-cyan-500 text-white  px-4 py-2 rounded" href="#">
										Resume
									</a>
								</div>
							</div>
						</div>
						<div className="bg-white text-center p-0">
							<p className="text-lg py-2 leading-normal font-burtons">I enjoy making web applications, challenging myself, and learning from others. I believe how you do anything is how you do everything.</p>
						</div>
					</div>

					<div className="text-center  h-2/5 py-4 px-2 bg-black">
						<div className=" bg-orange-300 h-full ">
							<h2 className="bg-yellow-100 text-2xl py-2">Projects</h2>
							<div ref={sliderRef} className="keen-slider">
								<div className="keen-slider__slide number-slide1">1</div>
								<div className="keen-slider__slide number-slide2">2</div>
								<div className="keen-slider__slide number-slide3">3</div>
								<div className="keen-slider__slide number-slide4">4</div>
								<div className="keen-slider__slide number-slide5">5</div>
								<div className="keen-slider__slide number-slide6">6</div>
							</div>
							{/* <div ref={sliderRef} className="keen-slider flex w-3/5 bg-blue">
								<div className="keen-slider__slide flex  bg-white w-1/2 justify-center gap-10 items-center ">
									<Image className="rounded-full bg-white h-auto w-1/5 border-4 border-black  " width={90} height={90} src={web1} alt="idk" />
									<Image className="rounded-full bg-white h-auto w-1/5 border-4 border-black  " width={90} height={90} src={web1} alt="idk" />
								</div>
								<div className="keen-slider__slide">
									2
									<Image className="rounded-full bg-white h-auto w-1/5 border-4 border-black  " width={90} height={90} src={web1} alt="idk" />
								</div>
								<div className="keen-slider__slide">3</div>
							</div> */}

							{/* <div className="flex flex-row flex-wrap gap-6  h-3/4 bg-white px-4">
								<div className="w-1/4 h-1/2   bg-purple-400 ">test</div>
								<div className="w-1/4 h-1/2   bg-purple-400">test</div>
								<div className="w-1/4 h-1/2   bg-purple-400">test</div>
								<div className="w-1/4 h-1/2   bg-purple-400">test</div>
								<div className="w-1/4 h-1/2   bg-purple-400">test</div>
							</div> */}
						</div>
					</div>

					<div className="rounded-full bg-gray-500 text-5xl flex justify-center gap-16 py-3 mt-3">
						<AiFillTwitterCircle className="bg-white rounded-full" />
						<AiFillLinkedin className="text-white rounded-full" />
						<AiFillYoutube />
					</div>
					{/* <div>
						<Image />
					</div> */}
				</section>
				{/* <section>
					<div>
						<h3></h3>
						<p></p>
					</div>
					<div>
						<div>
							<Image />
							<h3></h3>
							<p></p>
							<h4></h4>
							<p></p>
							<p></p>
							<p></p>
						</div>
					</div>
				</section> */}
			</main>
		</div>
	);
}
