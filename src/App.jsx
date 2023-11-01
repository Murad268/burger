import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/menu' element={<Menu />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App
