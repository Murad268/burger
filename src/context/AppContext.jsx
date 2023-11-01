import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
	const [burgers, setBurgers] = useState([
		{
			id: 1,
			title: 'Cheese Burger',
			desc: 'Pão, Hamburger 200gr, Cheedar, Fritas',
			price: '26,00',
			img: 'https://bit.ly/2NlASSf',
		},
		{
			id: 2,
			title: 'Cheese Burger',
			desc: 'Pão, Hamburger 200gr, Cheedar, Fritas',
			price: '26,00',
			img: 'https://bit.ly/2NlASSf',
		},
		{
			id: 3,
			title: 'Cheese Burger',
			desc: 'Pão, Hamburger 200gr, Cheedar, Fritas',
			price: '26,00',
			img: 'https://bit.ly/2NlASSf',
		},
		{
			id: 4,
			title: 'Cheese Burger',
			desc: 'Pão, Hamburger 200gr, Cheedar, Fritas',
			price: '26,00',
			img: 'https://bit.ly/2NlASSf',
		},
		{
			id: 5,
			title: 'Cheese Burger',
			desc: 'Pão, Hamburger 200gr, Cheedar, Fritas',
			price: '26,00',
			img: 'https://bit.ly/2NlASSf',
		},
		{
			id: 6,
			title: 'Cheese Burger',
			desc: 'Pão, Hamburger 200gr, Cheedar, Fritas',
			price: '26,00',
			img: 'https://bit.ly/2NlASSf',
		},
		{
			id: 7,
			title: 'Cheese Burger',
			desc: 'Pão, Hamburger 200gr, Cheedar, Fritas',
			price: '26,00',
			img: 'https://bit.ly/2NlASSf',
		},
		{
			id: 8,
			title: 'Cheese Burger',
			desc: 'Pão, Hamburger 200gr, Cheedar, Fritas',
			price: '26,00',
			img: 'https://bit.ly/2NlASSf',
		},
	])

	const values = {
		burgers
	}
	return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export const useApp = () => {
	const context = useContext(AppContext)

	if (context == undefined) {
		throw new Error('Error')
	}

	return context
}
