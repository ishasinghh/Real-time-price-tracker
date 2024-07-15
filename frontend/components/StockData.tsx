import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../actions/dataActions';
import styles from './StockData.module.css';
import { RootState, AppDispatch } from '../store';

const StockData: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    const symbol = 'bitcoin'; // Example symbol, replace with dynamic value if needed
    dispatch(fetchData(symbol));
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.tableContainer}>
      <h2>Stock Data</h2>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry: any) => (
            <tr key={entry._id}>
              <td>{entry.symbol}</td>
              <td>{entry.price}</td>
              <td>{entry.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockData;
