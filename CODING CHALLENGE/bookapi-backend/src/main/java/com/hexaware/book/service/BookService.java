package com.hexaware.book.service;

import java.util.List;

import com.hexaware.book.entity.Book;

public interface BookService {
	
	List<Book> getAllBooks();

	Book addBook(Book book);
	
	Book getBookByIsbn(String isbn);
	
	Book updateBook(String isbn, Book book);
	
	void deleteBook(String isbn);
	
	
}
