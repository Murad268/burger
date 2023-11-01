import React from 'react'

function Contact() {
	return (
		<div id='container'>
			<h1>&bull; Keep in Touch &bull;</h1>
			<div className='underline'></div>
			<div className='icon_wrapper'>
				<svg className='icon' viewBox='0 0 145.192 145.192'>
					{/* SVG paths here */}
				</svg>
			</div>
			<form action='#' method='post' id='contact_form'>
				<div className='name'>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						placeholder='My name is'
						name='name'
						id='name_input'
						required
					/>
				</div>
				<div className='email'>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						placeholder='My e-mail is'
						name='email'
						id='email_input'
						required
					/>
				</div>
				<div className='telephone'>
					<label htmlFor='telephone'>Telephone:</label>
					<input
						type='text'
						placeholder='My number is'
						name='telephone'
						id='telephone_input'
						required
					/>
				</div>
				<div className='subject'>
					<label htmlFor='subject'>Subject:</label>
					<select name='subject' id='subject_input' required>
						<option disabled hidden value=''>
							Subject line
						</option>
						<option value='project'>I'd like to start a project</option>
						<option value='question'>I'd like to ask a question</option>
						<option value='proposal'>I'd like to make a proposal</option>
					</select>
				</div>
				<div className='message'>
					<label htmlFor='message'>Message:</label>
					<textarea
						name='message'
						placeholder="I'd like to chat about"
						id='message_input'
						cols='30'
						rows='5'
						required
					></textarea>
				</div>
				<div className='submit'>
					<input type='submit' value='Send Message' id='form_button' />
				</div>
			</form>
		</div>
	)
}

export default Contact
