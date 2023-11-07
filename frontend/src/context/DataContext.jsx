import  { createContext, useState, useEffect } from 'react';
import axios from 'axios'; 
import { useContext } from 'react';

// Create the context
 const DataContext = createContext();
export const useCryptoData = () => useContext(DataContext)

// Provider component
export const DataProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState([]);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios('/server/coins');
          console.log(response);
        setCryptoData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        
      }
    };

    fetchData();
  }, []);



  return (
    <DataContext.Provider value={{ cryptoData, setCryptoData }}>
      {children}
    </DataContext.Provider>
  );
};
