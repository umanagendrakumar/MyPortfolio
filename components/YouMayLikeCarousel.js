import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './YouMayLikeCarousel.css';


const YouMayLikeCarousel = ({ coins }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel responsive={responsive}>
      {coins.map((coin, index) => (
        <div key={index} className="coin-item">
          <img src={coin.item.thumb} alt={coin.item.name} />
          <p>{coin.item.name} ({coin.item.symbol})</p>
        </div>
      ))}
    </Carousel>
  );
};

export default YouMayLikeCarousel;