import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const euroValue = (parseFloat(rupees) / 101).toFixed(2); 
    setEuro(euroValue);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2 style={{color:"green", fontWeight:800}}>Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter amount in INR"
          required
        />
        <button type="submit">Convert</button>
      </form>
      {euro && <p>Converted Amount: ${euro}</p>}
    </div>
  );
}

export default CurrencyConvertor;
