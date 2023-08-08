import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import web1 from "/public/josh.jpeg";

export default function Home() {
	return (
		<div>
			<main className=" bg-blue-700">
				<section className="h-screen overflow-hidden">
					<nav className="bg-white py-10 mb-6 flex justify-between">
						<h1 className="text-xl font-burtons">Hello World</h1>
						<ul className="flex items-center">
							<li>
								<BsFillMoonStarsFill className="cursor-pointer text-2xl" />
							</li>
							<li>
								<a className="bg-cyan-500 text-white px-4 py-2 rounded" href="#">
									Resume
								</a>
							</li>
							<li>Test2</li>
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
							<p className="text-md py-2 leading-normal font-burtons">I enjoy making web applications, challenging myself, and learning from others. I believe how you do anything is how you do everything.</p>
						</div>
					</div>
					<div className="text-center p-10">
						<h2 className="text-5xl py-2">Joshua Garvey</h2>
						<h3 className="text-2xl py-2">Full Stack</h3>
						<p className="text-md py-5 leading-8">I enjoy making web applications, challenging myself, and learning from others. I believe how you do anything is how you do everything so the goal is to do everything and anything to the the best of my ability and than improve.</p>
					</div>
					<div className="text-5xl flex justify-center gap-16 py-3">
						<AiFillTwitterCircle />
						<AiFillLinkedin />
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
