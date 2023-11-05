// PortfolioPage.jsx

import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { usePortfolio } from '../../context/PortfolioContext';



const PortfolioPage = () => {
  const { holdings, addCurrency, removeCurrency, portfolioValue } = usePortfolio();
  const { user, setUser,
    isAuthenticated, setIsAuthenticated,
    login, logout, } = useAuth();

  // Function to handle adding a currency (would be called when a user submits a form)
  const handleAddCurrency = (currencyData) => {
    // Placeholder for currency data structure
    const newCurrency = {
      id: Date.now(), // temporary unique id
      name: currencyData.name,
      symbol: currencyData.symbol,
      amount: currencyData.amount,
      price: currencyData.price
    };
    addCurrency(newCurrency);
  };

  // Function to handle removing a currency
  const handleRemoveCurrency = (currencyId) => {
    removeCurrency(currencyId);
  };

  return (
    <div className="portfolio-page">
      <h1>{user ? `${user.name}'s Portfolio` : 'My Portfolio'}</h1>
      <h2>Total Value: ${portfolioValue.toFixed(2)}</h2>
      <div className="currencies">
        {holdings.map((currency) => (
          <div key={currency.id} className="currency">
            <h2>{currency.name} - {currency.symbol}</h2>
            <p>Amount: {currency.amount}</p>
            <p>Price: ${currency.price.toFixed(2)}</p>
            <button onClick={() => handleRemoveCurrency(currency.id)}>Remove</button>
          </div>
        ))}
      </div>
      {/* You would have a form or another UI element to add currencies */}
      <button onClick={() => handleAddCurrency({/* currency data */})}>Add Currency</button>
    </div>
  );
};

export default PortfolioPage;
