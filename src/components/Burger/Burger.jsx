import React from 'react'
import './burger.css'
function Burger({ burger }) {
	return (
		<div>
			<div className='content'>
				<div id='card' className='card'>
					<div className='side'>
						<div className='card-img'>
							<img src={burger.img} alt={burger.title} />
						</div>
						<div className='card-info'>
							<p className='card-info-title'>
								{burger.title}
								<span>R$ {burger.price}</span>
							</p>
							<p className='card-info-text'>{burger.desc}</p>
						</div>
					</div>
					<div className='back'>
						<div className='card-img card-img-back'>
							<img src={burger.img} alt={burger.title} />
							<button id='cardClose' className='card-close'>
								x
							</button>
						</div>
						<div className='card-info card-info-back'>
							<p className='card-info-title'>
								{burger.title}
								<span>R$ {burger.price}</span>
							</p>
							<p className='card-info-text'>{burger.desc}</p>
							<div className='card-form'>
								<form>
									<div className='flex-center'>
										<button>-</button>
										<input type='text' defaultValue='0' />
										<button>+</button>
									</div>
									<input type='submit' defaultValue='Adicionar' />
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Burger
