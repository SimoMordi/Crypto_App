

import  { createContext, useState, useEffect } from 'react';
import axios from 'axios'; 
import { useContext } from 'react';

// Create the context
 const DataContext = createContext();
export const useData = () => useContext(DataContext)

// Provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios('http://localhost:3000/api');
 
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Optionally handle errors here
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
