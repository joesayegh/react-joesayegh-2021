import React from 'react';

import './Contact.scss';

const Contact = () => {
	let testForm = document.querySelector('#contact form');

	testForm.addEventListener('submit', (e) => {
		e.preventDefault();

		const formData = new FormData(testForm);
		fetch(testForm.getAttribute('action'), {
			method: 'POST',
			headers: {
				Accept: 'application/x-www-form-urlencoded;charset=UTF-8',
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			},
			body: new URLSearchParams(formData).toString(),
		}).then((res) => {
			if (res) {
				alert('Thanks for getting in touch. We’ll get back to you very soon.');
			}
		});
	});

	return (
		<section className="contact-form bg-contact-form">
			<div id="contact" className="contact-form-wrapper">
				<h2 className="text-center">Say Hello</h2>
				<form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/#contact">
					<input className="d-none" name="bot-field" />
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
