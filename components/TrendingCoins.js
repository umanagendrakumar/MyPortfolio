import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TrendingCoins.css'; // Create a CSS file to style this component

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  const fetchTrendingCoins = async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
      setTrendingCoins(response.data.coins.slice(0, 3)); // Top 3 coins
    } catch (error) {
      console.error('Error fetching trending coins:', error);
    }
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  return (
    <div className="trending-coins-container">
      <h2>Trending Coins (24h)</h2>
      <div className="coins-list">
        {trendingCoins.map((coin) => (
          <div key={coin.item.id} className="coin-card">
            <img src={coin.item.thumb} alt={coin.item.name} className="coin-image" />
            <div className="coin-info">
              <h3>{coin.item.name}</h3>
              <p>Symbol: {coin.item.symbol.toUpperCase()}</p>
              <p>Market Cap Rank: {coin.item.market_cap_rank}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
