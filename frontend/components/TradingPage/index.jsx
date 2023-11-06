import { useState } from "react";
import { useCrypto } from "../../context/CryptoContext";



const TradingPage = () => {
  const { cryptocurrencies, buyCrypto, sellCrypto, } = useCrypto();
  const [selectedSymbol, setSelectedSymbol] = useState('');
  const [amount, setAmount] = useState(0);

  // Find the full selected crypto object based on the symbol
  const selectedCrypto = cryptocurrencies.find(crypto => crypto.symbol === selectedSymbol);

  // This function should be defined to check if the user can sell the selected cryptocurrency
  const userHasEnoughCrypto = (crypto, amount) => {
    // Placeholder for actual logic to check user's holdings
    return true; // Replace with actual check
  };

  const handleBuy = () => {
    if (selectedCrypto && amount > 0 && selectedCrypto.price * amount <= balance) {
      buyCrypto(selectedCrypto, amount);
    } else {
      // Replace with actual error handling
      console.log("Not enough balance or invalid input");
    }
  };

  const handleSell = () => {
    if (selectedCrypto && amount > 0 && userHasEnoughCrypto(selectedCrypto, amount)) {
      sellCrypto(selectedCrypto, amount);
    } else {
      // Replace with actual error handling
      console.log("Trying to sell more than you own or invalid input");
    }
  };

  return (
    <div className="trading-page">
      <h1>Trade Cryptocurrencies</h1>
      <div className="trade-controls">
        <select value={selectedSymbol} onChange={(e) => setSelectedSymbol(e.target.value)}>
          <option value="">Select a cryptocurrency</option>
          {cryptocurrencies.map((crypto) => (
            <option key={crypto.symbol} value={crypto.symbol}>
              {crypto.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          min="0"
        />
        <button onClick={handleBuy}>Buy</button>
        <button onClick={handleSell}>Sell</button>
      </div>
    </div>
  );
};

export default TradingPage;
