import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import PriceCard from './components/PriceCard';
import TrendingCoins from './components/TrendingCoins';
import ChartComponent from './components/ChartComponent';
import YouMayLikeCarousel from './components/YouMayLikeCarousel';
import { getTrendingCoins } from './services/api';




const App = () => {
    const [trendingCoins, setTrendingCoins] = useState([]);
  
    useEffect(() => {
      const fetchTrendingCoins = async () => {
        const data = await getTrendingCoins();
        setTrendingCoins(data.coins);
      };
      fetchTrendingCoins();
    }, []);
  
    return (
      <div className="app">
        <header className="app-header">
          <h1>KoinX Frontend Assignment</h1>
        </header>
        <main>
          <PriceCard />
          <ChartComponent />
          <TrendingCoins />
          <h2>You May Also Like</h2>
          <YouMayLikeCarousel coins={trendingCoins} />
        </main>
      </div>
    );
  };
  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);







/*
        1. install react and react-dom using npm or yarn
        2. import react and react-dom in our js file
        3. use react.createElement to create react elements
        4. use ReactDOM.createRoot to create a root element
        5. use root.render to render the react element in the dom.

        - jsx
        browsers dont understand jsx so we need to convert it to js
        - babel
        - babel is a transpiler
        - it converts jsx to js
        

    




*/

/*

        3.Now Installation of react into our package
            -npm install react
                and
            -npm install react-dom

        4.After that we can create a react app
            -to run it we need to use parcel
                -npx parcel entry_point (npx parcel index.html)


*/