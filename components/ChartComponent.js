import React from 'react';

const ChartComponent = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      new window.TradingView.widget({
        container_id: 'tradingview-widget',
        symbol: 'BITSTAMP:BTCUSD',
        width: '100%',
        height: 400,
        theme: 'light',
        style: '1',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        hide_side_toolbar: false,
        allow_symbol_change: true,
      });
    };
  }, []);

  return <div id="tradingview-widget" />;
};

export default ChartComponent;