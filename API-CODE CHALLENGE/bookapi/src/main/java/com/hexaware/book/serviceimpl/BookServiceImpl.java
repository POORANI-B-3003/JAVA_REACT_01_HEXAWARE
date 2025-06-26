package com.hexaware.book.serviceimpl;

import com.hexaware.book.entity.Book;
import com.hexaware.book.repository.BookRepository;
import com.hexaware.book.service.BookService;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookrepo;

    @Override
    public List<Book> getAllBooks() {
        return bookrepo.findAll();
    }

    @Override
    public Book addBook(Book book) {
        if (bookrepo.existsById(book.getIsbn())) {
            throw new IllegalArgumentException("Book already exists!");
        }
        return bookrepo.save(book);
    }

    @Override
    public Book getBookByIsbn(String isbn) {
        return bookrepo.findById(isbn)
                .orElseThrow(() -> new EntityNotFoundException("Book not found!"));
    }

    @Override
    public Book updateBook(String isbn, Book book) {
        Book existing = getBookByIsbn(isbn);
        existing.setTitle(book.getTitle());
        existing.setAuthor(book.getAuthor());
        existing.setPublicationYear(book.getPublicationYear());
        return bookrepo.save(existing);
    }

    @Override
    public void deleteBook(String isbn) {
        if (!bookrepo.existsById(isbn)) {
            throw new EntityNotFoundException("Book not found with ISBN: " + isbn);
        }
        bookrepo.deleteById(isbn);
    }
}
