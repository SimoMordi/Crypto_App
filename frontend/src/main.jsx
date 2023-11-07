import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from '../src/context/AuthContext.jsx'
import { DataProvider } from '../src/context/DataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>

      <DataProvider>        
         <AuthProvider>
         
            <App />
         
          </AuthProvider>
      </DataProvider>

    </Router>    
  </React.StrictMode>,
)
