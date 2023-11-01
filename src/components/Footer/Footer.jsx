import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import './footer.css'
function Footer() {
	return (
		<footer>
			<div className='footer__socials'>
				<a href=''>
					<FaFacebookF />
				</a>
				<a href=''>
					<FaInstagram />
				</a>
				<a href=''>
					<FaTwitter />
				</a>
			</div>
		</footer>
	)
}

export default Footer
