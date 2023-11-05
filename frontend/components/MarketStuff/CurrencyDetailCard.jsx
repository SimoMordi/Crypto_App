// CurrencyDetailCard.jsx
import './marketStuff.css';


const CurrencyDetailCard = ({ crypto, buyCrypto, sellCrypto }) => {
  return (
    <div className="currency-detail-card">
      <div className="crypto-header">
        <h3>{crypto.name} ({crypto.symbol})</h3>
        <p>Price: ${crypto.price}</p>
       
      </div>
      <div className="crypto-actions">
        <button onClick={() => buyCrypto(crypto.id)}>Buy</button>
        <button onClick={() => sellCrypto(crypto.id)}>Sell</button>
      </div>
    </div>
  );
};

export default CurrencyDetailCard;
