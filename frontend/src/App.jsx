import './app.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import TradingPage from '../components/TradingPage';
import PortfolioPage from '../components/PortfolioPage';
import MarketPage from '../components/MarketPage';
import LoginPage from '../components/Authentication/loginPage';
import RegisterPage from '../components/Authentication/RegisterPage';
import AdminPage from '../components/AdminPage';
import Navbar from '../components/Navbar';


function App() {
   
  return (
    <>
    
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trade" element={<TradingPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
      
    
  );
}

export default App;

