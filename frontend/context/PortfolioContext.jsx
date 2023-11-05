import { createContext, useState, useContext } from 'react';

// Create a context for the portfolio
const PortfolioContext = createContext();
export const usePortfolio = () => useContext(PortfolioContext);
// Provide the context to the children components
export const PortfolioProvider = ({ children }) => {
  const [holdings, setHoldings] = useState([]);
  const [portfolioValue, setPortfolioValue] = useState(0);

  // Function to add a currency to the portfolio
  const addCurrency = (currency) => {
    setHoldings([...holdings, currency]);
    // Recalculate the total portfolio value
    setPortfolioValue(holdings.reduce((acc, curr) => acc + curr.price * curr.amount, 0));
  };

  // Function to remove a currency from the portfolio
  const removeCurrency = (currencyId) => {
    setHoldings(holdings.filter((currency) => currency.id !== currencyId));
    // Recalculate the total portfolio value
    setPortfolioValue(holdings.reduce((acc, curr) => acc + curr.price * curr.amount, 0));
  };

  return (
    <PortfolioContext.Provider value={{ holdings, portfolioValue, addCurrency, removeCurrency }}>
      {children}
    </PortfolioContext.Provider>
  );
};



