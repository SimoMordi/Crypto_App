// MarketOverview.jsx
import './marketStuff.css'


const MarketOverview = () => {
  // Placeholder data
  const marketData = {
    topGainers: [
      { name: 'Bitcoin', symbol: 'BTC', change: '+5%' },
      { name: 'Ethereum', symbol: 'ETH', change: '+3%' },
    ],
    topLosers: [
      { name: 'Dogecoin', symbol: 'DOGE', change: '-2%' },
      { name: 'Ripple', symbol: 'XRP', change: '-1%' },
    ],
    // Additional market stats can be added here
  };

  return (
    <div className="market-overview">
      <h2>Market Overview</h2>
      <div className="top-gainers-losers">
        <div className="gainers">
          <h3>Top Gainers</h3>
          <ul>
            {marketData.topGainers.map((gainer, index) => (
              <li key={index}>{gainer.name} ({gainer.symbol}): {gainer.change}</li>
            ))}
          </ul>
        </div>
        <div className="losers">
          <h3>Top Losers</h3>
          <ul>
            {marketData.topLosers.map((loser, index) => (
              <li key={index}>{loser.name} ({loser.symbol}): {loser.change}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* You can add more market stats here */}
    </div>
  );
};

export default MarketOverview;
