import { useState } from 'react';
import { useCrypto } from "../../context/CryptoContext";
import CurrencyDetailCard from "../MarketStuff/CurrencyDetailCard";
import MarketOverview from "../MarketStuff/MarketOverview";
import SearchFilter from "../MarketStuff/SearchFilter";
import './index.css'

const MarketPage = () => {
  const { cryptocurrencies, buyCrypto, sellCrypto } = useCrypto();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const handleSearch = term => {
    setSearchTerm(term);
  };
  const handleFilterChange = filterValue => {
    setFilter(filterValue);
    // You would implement filter logic here based on the filterValue
  };


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
