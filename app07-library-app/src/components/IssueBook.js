import React, { useState } from 'react';

const IssueBook = () => {
  const [book, setBook] = useState('');
  const [user, setUser] = useState('');

  const handleIssue = () => {
    alert(`${book} issued to ${user}`);
    setBook('');
    setUser('');
  };

  return (
    <div>
      <h2>Issue Book</h2>
      <input
        type="text"
        placeholder="Book Name"
        value={book}
        onChange={(e) => setBook(e.target.value)}
      />
      <input
        type="text"
        placeholder="Issued To"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={handleIssue}>Issue</button>
    </div>
  );
};

export default IssueBook;
