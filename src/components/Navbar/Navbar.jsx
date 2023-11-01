import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
function Navbar() {
	return (
		<header>
			<nav className='navbar'>
				<div className='navbar__logo'>
					<img
						src='https://kebanet.restapp.com/uploads/36384/theme/a35554ea00f9f65bf7c6ef6051d4e98e.PNG'
						alt=''
					/>
				</div>
				<div className='navbarLinks'>
					<ul>
						<li>
							<NavLink to='/'>Ana sayfa</NavLink>
						</li>
						<li>
							<NavLink to='/menu'>Menu</NavLink>
						</li>
						<li>
							<NavLink to='/about'>Hakkımızda</NavLink>
						</li>
						<li>
							<NavLink to='/contact'>İletişim</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
