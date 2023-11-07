import './app.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import LoginPage from './pages/Authentication/loginPage';
import RegisterPage from './pages/Authentication/RegisterPage';




function App() {
   
  return (
    <>
    
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
      </Routes>
    </>
      
    
  );
}

export default App;

