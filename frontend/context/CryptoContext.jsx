import { createContext, useState, useContext, useEffect } from 'react';

// Create a context for cryptocurrencies
const CryptoContext = createContext(null);

// Provide a hook for easy access to the CryptoContext
export const useCrypto = () => useContext(CryptoContext);

// The provider component
export const CryptoProvider = ({ children }) => {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);

  // Placeholder for function to fetch cryptocurrencies data
  const fetchCryptocurrencies = () => {
    // Here you would fetch data from your backend or an API
    // and then update the state with setCryptocurrencies
  };

  useEffect(() => {
    fetchCryptocurrencies();
  }, []);

  // Placeholder for buy/sell functions
  const buyCrypto = (symbol, amount) => {
    // Implement buy logic
  };

  const sellCrypto = (symbol, amount) => {
    // Implement sell logic
  };

  // The value that will be given to the context
  const cryptoContextValue = {
    cryptocurrencies, setCryptocurrencies,
    buyCrypto, sellCrypto,
    
  };

  return (
    <CryptoContext.Provider value={cryptoContextValue}>
        {children}
    </CryptoContext.Provider>
    ) 
      
};
