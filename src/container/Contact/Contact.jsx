import React from 'react';

import './Contact.scss';

const Contact = () => {
	return (
		<section className="contact-form bg-contact-form">
			<div className="contact-form-wrapper">
				<h2 className="text-center">Say Hello</h2>
				<form name="contact" netlify>
					<p>
						<label>
							Name: <input type="text" name="name" />
						</label>
					</p>
					<p>
						<label>
							Email: <input type="email" name="email" />
						</label>
					</p>
					<p>
						<label>
							Message: <textarea name="message"></textarea>
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
