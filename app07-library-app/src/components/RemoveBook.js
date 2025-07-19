import React, { useState } from 'react';

const RemoveBook = () => {
  const [book, setBook] = useState('');

  const handleRemove = () => {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const updated = books.filter((b) => b !== book);
    localStorage.setItem('books', JSON.stringify(updated));
    alert('Book removed');
    setBook('');
  };

  return (
    <div>
      <h2>Remove Book</h2>
      <input
        type="text"
        placeholder="Enter book name"
        value={book}
        onChange={(e) => setBook(e.target.value)}
      />
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default RemoveBook;
