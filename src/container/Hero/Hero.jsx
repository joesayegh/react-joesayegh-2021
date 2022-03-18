import React from "react";

import Typewriter from "typewriter-effect";

import "./Hero.scss";

function Hero() {
	// FIND THE FULL HEIGHT OF THE VIEWPORT
	const fullHeight = window.innerHeight;

	return (
		<>
			<div className="bg-intro">
				<div className="bg-black-trans">
					{/* APPLY THE FULL HEIGHT TO HERE */}
					<div style={{ height: fullHeight + "px" }} className="intro-content container">
						<h1>
							Joe Sayegh
							<br />
							I'm a&nbsp;
							<Typewriter
								options={{
									autoStart: true,
									loop: true,
								}}
								onInit={(typewriter) => {
									typewriter

										.typeString("Developer")
										.pauseFor(3000)
										.deleteAll()

										.typeString("Designer")
										.pauseFor(3000)
										.deleteAll()

										.typeString("Creator")
										.pauseFor(3000)
										.deleteAll()

										.start();
								}}
							/>
						</h1>
					</div>
				</div>
			</div>
		</>
	);
}

export default Hero;
