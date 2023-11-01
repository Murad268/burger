import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppContextProvider } from './context/AppContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
)
