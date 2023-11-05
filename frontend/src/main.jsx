import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext.jsx'
import { CryptoProvider } from '../context/CryptoContext.jsx'
import { PortfolioProvider } from '../context/PortfolioContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
     <CryptoProvider>
        <AuthProvider>
          <PortfolioProvider>
           <App />
          </PortfolioProvider>
         </AuthProvider>
      </CryptoProvider>
    </Router>    
  </React.StrictMode>,
)
