import { useState } from 'react';
import CurrencyDetailCard from "../MarketStuff/CurrencyDetailCard";
import MarketOverview from "../MarketStuff/MarketOverview";
import SearchFilter from "../MarketStuff/SearchFilter";
import './index.css'

const MarketPage = () => {
  
  const [searchTerm, setSearchTerm] = useState('');
 
  const filteredCryptocurrencies = cryptocurrencies.filter(crypto =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="market-page">
        <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <MarketOverview />
      <div className="currency-cards-container">
        {filteredCryptocurrencies.map((crypto) => (
          <CurrencyDetailCard 
            key={crypto._id} 
            crypto={crypto}
            buyCrypto={buyCrypto}
            sellCrypto={sellCrypto}
          />
        ))}
      </div>
    </div>
  );
};

export default MarketPage;
