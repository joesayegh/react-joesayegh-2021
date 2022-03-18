import React from "react";

import "./Contact.scss";

const Contact = () => {
	return (
		<section className="contact-form bg-contact-form">
			<div className="contact-form-wrapper">
				<h2 className="text-center">Say Hello</h2>
				<form name="contact" method="POST" data-netlify="true">
					<p>
						<label for="name">
							Name
							<input id="name" type="text" name="name" />
						</label>
					</p>

					<p>
						<label for="email">
							Email
							<input id="email" type="email" name="email" />
						</label>
					</p>
					<p>
						<label for="message">
							Message
							<textarea id="message" name="message" rows="4"></textarea>
						</label>
					</p>
					<p>
						<button type="submit">Send</button>
					</p>
				</form>
			</div>
		</section>
	);
};

export default Contact;
