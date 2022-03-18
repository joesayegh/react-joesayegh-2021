import React from "react";

import { images } from "../../constants/";
import "./Footer.scss";

// APPLY TO THE COPYRIGHT LINE
const today = new Date();

const Footer = () => {
	return (
		<footer className="padding-default bg-white text-black">
			<div className="container">
				<div className="footer-wrapper">
					<ul className="footer-social-links">
						<li className="footer-social-links__link">
							<a href="https://twitter.com/joe_sayegh" target="_blank" rel="noopener noreferrer" aria-label="Twitter Link (Opens in a new tab)">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.276 483.692">
									<g id="twitter">
										<path d="M187.2,483.692c224.632,0,347.5-186.106,347.5-347.5,0-5.286,0-10.548-.356-15.787a248.5,248.5,0,0,0,60.932-63.218,243.836,243.836,0,0,1-70.148,19.216A122.576,122.576,0,0,0,578.822,8.852,244.808,244.808,0,0,1,501.27,38.5,122.292,122.292,0,0,0,412.219,0C345.155,0,289.972,55.184,289.972,122.245a122.329,122.329,0,0,0,3.165,27.64A346.9,346.9,0,0,1,41.431,22.282C9.2,77.771,25.876,149.68,79.243,185.316a121.229,121.229,0,0,1-55.432-15.287v1.548A122.534,122.534,0,0,0,121.793,291.3a121.956,121.956,0,0,1-55.145,2.1,122.517,122.517,0,0,0,114.1,84.815A245.125,245.125,0,0,1,29.073,430.594,248.466,248.466,0,0,1,0,428.831,345.788,345.788,0,0,0,187.2,483.6" />
									</g>
								</svg>
							</a>
						</li>
						<li className="footer-social-links__link">
							<a href="https://github.com/joesayegh" target="_blank" rel="noopener noreferrer" aria-label="GitHub Link (Opens in a new tab)">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.775 117.793">
									<g id="github">
										<path d="M60.388,0A60.394,60.394,0,0,0,41.3,117.69c3.017.558,4.126-1.311,4.126-2.906,0-1.439-.056-6.2-.082-11.243C28.541,107.194,25,96.416,25,96.416c-2.747-6.979-6.7-8.836-6.7-8.836-5.479-3.748.413-3.671.413-3.671,6.064.426,9.257,6.224,9.257,6.224,5.386,9.231,14.127,6.562,17.573,5.019.542-3.9,2.107-6.567,3.834-8.075-13.413-1.526-27.514-6.7-27.514-29.844a23.371,23.371,0,0,1,6.223-16.208c-.627-1.522-2.694-7.664.585-15.982,0,0,5.071-1.622,16.61,6.191a57.257,57.257,0,0,1,30.244,0c11.526-7.813,16.589-6.191,16.589-6.191,3.288,8.318,1.22,14.46.593,15.982a23.324,23.324,0,0,1,6.215,16.208c0,23.2-14.127,28.3-27.574,29.8,2.166,1.874,4.1,5.549,4.1,11.183,0,8.08-.07,14.583-.07,16.572,0,1.608,1.087,3.49,4.148,2.9A60.4,60.4,0,0,0,60.388,0Z" fill-rule="evenodd" />
										<path d="M22.872,86.7c-.133.3-.605.391-1.035.185s-.684-.607-.542-.908.6-.394,1.04-.188.688.61.537.911Z" />
										<path d="M25.318,89.432c-.288.266-.851.142-1.233-.28a.921.921,0,0,1-.177-1.254c.3-.267.843-.142,1.238.279s.473.984.172,1.255Z" />
										<path d="M27.7,92.909c-.37.258-.975.017-1.349-.52s-.371-1.182.008-1.44.971-.025,1.35.507.369,1.191-.009,1.453Z" />
										<path d="M30.961,96.27c-.331.365-1.036.266-1.552-.232a1.162,1.162,0,0,1-.344-1.543c.336-.365,1.045-.262,1.565.232s.683,1.181.331,1.543Z" />
										<path d="M35.461,98.221c-.147.472-.825.687-1.509.486s-1.13-.761-.992-1.238.824-.7,1.513-.486,1.13.756.988,1.238Z" />
										<path d="M40.4,98.582c.017.5-.563.911-1.281.92s-1.307-.387-1.314-.877.567-.911,1.289-.924,1.306.387,1.306.881Z" />
										<path d="M45,97.8c.086.485-.413.984-1.126,1.117s-1.35-.172-1.439-.653c-.087-.5.42-1,1.121-1.126s1.353.168,1.444.662Z" />
									</g>
								</svg>
							</a>
						</li>
						<li className="footer-social-links__link">
							<a href="https://codepen.io/joesayegh" target="_blank" rel="noopener noreferrer" aria-label="CodePen Link (Opens in a new tab)">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
									<g id="codepen">
										<polygon points="11 1 21 7.5 21 14.5 11 21 1 14.5 1 7.5 11 1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
										<line x1="11" y1="21" x2="11" y2="14.5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
										<polyline points="21 7.5 11 14.5 1 7.5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
										<polyline points="1 14.5 11 7.5 21 14.5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
										<line x1="11" y1="1" x2="11" y2="7.5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
									</g>
								</svg>
							</a>
						</li>
						<li className="footer-social-links__link">
							<a href="https://uk.linkedin.com/in/joseph-sayegh-91069613" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Link(Opens in a new tab)">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 2388.996">
									<g id="linkedin">
										<path d="M0,277.51Q0,156.85,84.459,78.427T304.054,0Q436.777,0,518.822,77.22q84.459,79.634,84.46,207.529,0,115.83-82.046,193.05-84.459,79.634-222.008,79.633h-2.413q-132.723,0-214.769-79.633T0,277.51ZM31.371,2389V777.027H567.085V2389Zm832.529,0h535.714V1488.9q0-84.462,19.305-130.309a349.948,349.948,0,0,1,102.558-138.755q68.774-56.71,172.538-56.709,270.271,0,270.271,364.383V2389H2500V1464.768q0-357.144-168.919-541.747t-446.428-184.6q-311.293,0-485.039,267.857v4.826H1397.2l2.413-4.826V777.027H863.9q4.824,77.218,4.826,480.212T863.9,2389Z" />
									</g>
								</svg>
							</a>
						</li>
					</ul>

					<div className="footer-copyright">
						<p>
							<span className="credit-light">
								Photos by <a href="https://unsplash.com/@bendavisual?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Benjamin Davies</a> and <a href="https://unsplash.com/@taniamousinho?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tânia Mousinho</a>.
							</span>
							<span className="credit-dark">
								Photos by <a href="https://unsplash.com/@henry_be?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Henry Be</a> and <a href="https://unsplash.com/@taniamousinho?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tânia Mousinho</a>.
							</span>
							<span>
								Developed with <a href="https://code.visualstudio.com/">Visual Studio Code</a> and <a href="https://www.github.com">Github</a>.
							</span>
							<a className="netlify-logo" href="https://www.netlify.com">
								<img src={images.deploysByNetlify} alt="Netlify Logo" />
							</a>
							&copy; {today.getFullYear()} Joe Sayegh. All rights reserved.
							<br />
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
