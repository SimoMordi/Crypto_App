import { useCrypto } from "../../context/CryptoContext";
import './index.css'

const HomePage = () => {
  const { cryptocurrencies, setCryptocurrencies,
    buyCrypto, sellCrypto, } = useCrypto();

  return (
    <div className="homepage">
      <header className="homepage-header">
                <h1>Welcome to CryptoDash</h1>
        
            </header>
            <section className="market-summary">
                <h2>Market Summary</h2>
                <ul>
                 {cryptocurrencies.map((crypto) => (
                 <li key={crypto.symbol}>
                  <span>{crypto.name} ({crypto.symbol}): ${crypto.price}</span>
                 </li>
                     ))}
                  </ul>
            </section>
             <section className="portfolio-snapshot">
                <h2>Your Portfolio</h2>
                {/* Portfolio snapshot components here */}
            </section>

    </div>
  );
};

export default HomePage;
