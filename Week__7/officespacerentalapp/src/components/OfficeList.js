import React from 'react';

const offices = [
  {
    name: "Cyber Heights",
    rent: 75000,
    address: "Sector 62, Noida"
  },
  {
    name: "Tech Park",
    rent: 58000,
    address: "Whitefield, Bangalore"
  },
  {
    name: "Mindspace",
    rent: 90000,
    address: "Madhapur, Hyderabad"
  },
  {
    name: "Startup Hub",
    rent: 45000,
    address: "Koramangala, Bangalore"
  }
];

const OfficeList = () => {
  const heading = <h1 style={{ textAlign: "center" }}>Office Space Rentals</h1>;

  return (
    <div>
      {heading}
      <img src='./OfficeSpace.jpg' alt="Office Space" style={{ display: 'block', margin: '0 auto', width: '300px', height: '200px' }} />

      <h2 style={{ marginTop: "20px" }}>Available Offices:</h2>
      <ul>
        {offices.map((office, index) => {
          const rentStyle = {
            color: office.rent < 60000 ? 'red' : 'green',
            fontWeight: 'bold'
          };

          return (
            <li key={index} style={{ marginBottom: "20px", listStyleType: "none", border: "1px solid #ccc", padding: "10px" }}>
              <p><strong>Name:</strong> {office.name}</p>
              <p><strong>Address:</strong> {office.address}</p>
              <p><strong>Rent:</strong> <span style={rentStyle}>₹{office.rent}</span></p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OfficeList;
