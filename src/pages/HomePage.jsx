import React from 'react'
import Button from '../components/Button/Button'
import { Link } from 'react-router-dom'
function HomePage() {
	const divStyle = {
		backgroundImage: `url('https://cdn.getiryemek.com/restaurants/1629742332475_1125x522.jpeg')`,
		height: '700px',
		width: '100%',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		alignItems: 'flex-end',
		paddingBottom: '30px',
		paddingLeft: '60px',
	}

	return (
		<div style={divStyle}>
			<Link to='/menu'>
				<Button>Sipariş Ver</Button>
			</Link>
		</div>
	)
}

export default HomePage
