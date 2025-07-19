import React, { useState } from 'react';

const AddBook = () => {
  const [book, setBook] = useState('');

  const handleAdd = () => {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    alert('Book added');
    setBook('');
  };

  return (
    <div>
      <h2>Add Book</h2>
      <input
        type="text"
        placeholder="Enter book name"
        value={book}
        onChange={(e) => setBook(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddBook;
