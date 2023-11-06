import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext.jsx'
import { CryptoProvider } from '../context/CryptoContext.jsx'
import { DataProvider } from '../context/DataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>

      <DataProvider>
        <CryptoProvider>
         <AuthProvider>
         
            <App />
         
          </AuthProvider>
        </CryptoProvider>
      </DataProvider>

    </Router>    
  </React.StrictMode>,
)
