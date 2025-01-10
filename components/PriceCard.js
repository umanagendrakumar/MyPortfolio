import React, { useEffect, useState } from 'react';
import { getBitcoinPrice } from '../services/api';
import './PriceCard.css';

const PriceCard = () => {
  const [priceData, setPriceData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBitcoinPrice();
      setPriceData(data.bitcoin);
    };
    fetchData();
  }, []);

  if (!priceData) return <div>Loading...</div>;

  return (
    <div className="price-card">
      <h2>Bitcoin Price</h2>
      <p>USD: ${priceData.usd}</p>
      <p>INR: ₹{priceData.inr}</p>
      <p>24h Change: {priceData.usd_24h_change.toFixed(2)}%</p>
    </div>
  );
};

export default PriceCard;