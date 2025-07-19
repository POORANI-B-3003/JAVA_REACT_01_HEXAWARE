import React, { useState } from 'react';

const ReturnBook = () => {
  const [book, setBook] = useState('');

  const handleReturn = () => {
    alert(`${book} returned successfully`);
    setBook('');
  };

  return (
    <div>
      <h2>Return Book</h2>
      <input
        type="text"
        placeholder="Book Name"
        value={book}
        onChange={(e) => setBook(e.target.value)}
      />
      <button onClick={handleReturn}>Return</button>
    </div>
  );
};

export default ReturnBook;
