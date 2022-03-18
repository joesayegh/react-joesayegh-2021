import React from "react";

import { Hero, Intro, WorkedWith, Contact, Footer } from "./container";

import "./App.scss";

const App = () => {
	return (
		<div>
			<Hero />
			<Intro />
			<WorkedWith />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
