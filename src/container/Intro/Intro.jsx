import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "./Intro.scss";

const Intro = () => {
	return (
		<section className="padding-default bg-white text-black">
			<div className="container">
				<h2 className="text-center">By way of introduction</h2>

				<Tabs>
					<TabList>
						<Tab>Short</Tab>
						<Tab>Long</Tab>
					</TabList>

					{/* SHORT */}
					<TabPanel>
						<p>
							Hi! My name is <span className="text-accent">Joe Sayegh</span>. I'm a freelance website developer from London. I create bespoke websites that are fully customisable. I code in a range of languages including HTML, CSS, SCSS, JavaScript and PHP. I enjoy working with WordPress, React and Gatsby.
						</p>
					</TabPanel>

					{/* LONG */}
					<TabPanel>
						<p>
							Hi! My name is <span className="text-accent">Joe Sayegh</span>. I'm a freelance website developer from London. I create bespoke websites that are fully customisable. I code in a range of languages including HTML, CSS, SCSS, JavaScript and PHP. I enjoy working with WordPress, React and Gatsby.
						</p>

						<p>Born and raised in England, I've lived in North London for most of my life. I was interested in technology from a young age. I built my first website when I was 14. This was when Netscape Navigator and Internet Explorer were duking it out for web supremacy.</p>

						<p>I have been working as a website designer, developer and creator for over a decade. I feel incredibly lucky to be able to do what I love for a living especially when you consider that neither my job nor the internet existed when I was born.</p>

						<p>My clients range from small local businesses all the way to global corporations operating all over the world. They've allowed me to produce work that we're both very proud of. I enjoy using CMS technologies such as Wordpress as well as cutting-edge tools such as React JS and Gatsby for statically generating sites and creating high-performing web applications. I have learnt how to use Git, GitHub and Bitbucket as part of my source control training and know how to work in a team.</p>
					</TabPanel>
				</Tabs>
			</div>
		</section>
	);
};

export default Intro;
