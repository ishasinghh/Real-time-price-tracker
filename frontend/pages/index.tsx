import React from 'react';
import StockData from '../components/StockData';
import ChangeSymbolModal from '../components/ChangeSymbolModal';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Real-Time Stock Data</h1>
      <StockData />
      <ChangeSymbolModal />
    </div>
  );
};

export default HomePage;
