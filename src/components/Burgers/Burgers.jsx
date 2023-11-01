import React from 'react'
import './burger.css'
import Burger from '../Burger/Burger'
import { useApp } from '../../context/AppContext'
function Burgers() {
   const {burgers} = useApp()
	return (
		<>
			<h1>Burgerlermiz</h1>
			<div className='burgers'>
            {
               burgers.map(burger => {
                  return <Burger key={burger.id} burger={burger}/>
               })
            }
			</div>
		</>
	)
}

export default Burgers
