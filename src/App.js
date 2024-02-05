
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [forexData, setForexData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.forexrateapi.com/v1/latest?api_key=7c7f6062064431005762be7ab88b1a68')
      .then(response => response.json())
      .then(data => {
        setForexData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <h1>Forex Rates</h1>
      <div>
        <h2>Base Currency: {forexData?.base}</h2>
        <p>Timestamp: {new Date(forexData?.timestamp * 1000).toLocaleString()}</p>
        <div>
          <h3>Exchange Rates</h3>
          <ul>
            <li>EUR: {forexData?.rates.EUR}</li>
            <li>INR: {forexData?.rates.INR}</li>
            <li>JPY: {forexData?.rates.JPY}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
