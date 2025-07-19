import axios from 'axios';

const API_BASE_URL = 'http://localhost:9000/books';

export const getBooks = () => axios.get(`${API_BASE_URL}/getAllbooks`);

export const addBook = (book) => axios.post(`${API_BASE_URL}/addbook`, book);

export const updateBook = (isbn, book) => axios.put(`${API_BASE_URL}/updatebook/${isbn}`, book);

export const deleteBook = (isbn) => axios.delete(`${API_BASE_URL}/deletebook/${isbn}`);
