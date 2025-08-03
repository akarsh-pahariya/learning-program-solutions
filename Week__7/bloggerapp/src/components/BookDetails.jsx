import React from 'react';

const books = [
  { title: 'Master React', price: 670 },
  { title: 'Deep Dive into Angular 11', price: 800 },
  { title: 'Mongo Essentials', price: 450 }
];

const BookDetails = () => {
  return (
    <div style={{ padding: '0 20px' }}>
      <h2>Book Details</h2>
      {books.map((book, idx) => (
        <div key={idx}>
          <strong>{book.title}</strong>
          <p>{book.price}</p>
        </div>
      ))}
    </div>
  );
};

export default BookDetails;
