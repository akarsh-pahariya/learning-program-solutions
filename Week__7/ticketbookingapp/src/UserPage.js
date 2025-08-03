import React from 'react';
import FlightDetails from './FlightDetails';

const UserPage = () => {
  return (
    <div>
      <h2>Welcome Back</h2>
      <p>You can browse and book flights below:</p>
      <FlightDetails canBook={true} />
    </div>
  );
};

export default UserPage;
