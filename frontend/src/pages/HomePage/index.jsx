
import { useState } from 'react';
import './index.css'
import { useCryptoData } from '../../context/DataContext';

const HomePage = () => {

const {cryptoData} = useCryptoData()
 

  const [currencyForm, setCurrencyForm] = useState({
    name: '',
    symbol: '',
    amount: '',
    price: '',
  });

  
  const handleRemoveCurrency = (currencyId) => {
    setData(prevData => prevData.filter(currency => currency.id !== currencyId));
  };

  return (
    <div>
           <h1>My Portfolio</h1>
      <div className="currencies">
        {cryptoData.map((coin) => (
          <div key={coin._id} className="currency">
            <h2>{coin.name} - {coin.symbol}</h2>
            <p>Amount: {coin.amount}</p>
            <p>Price: ${coin.price.$numberDecimal}</p>
            <button onClick={() => handleRemoveCurrency(coin._id)}>Remove</button>
          </div>
        ))}
      </div>


    </div>
  )
  
};

export default HomePage;
