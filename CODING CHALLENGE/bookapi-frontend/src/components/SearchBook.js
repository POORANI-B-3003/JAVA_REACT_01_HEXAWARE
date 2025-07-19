import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

const SearchBook = ({ books, setBooks, fetchBooks }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        if (!searchQuery.trim()) {
            fetchBooks();
        } else {
            const filtered = books.filter(book =>
                book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.genre.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setBooks(filtered);
        }
    };

    return (
        <Input
            placeholder='Search by Title...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            action={{
                icon: 'search',
                onClick: handleSearch
            }}
            fluid
        />
    );
};

export default SearchBook;
