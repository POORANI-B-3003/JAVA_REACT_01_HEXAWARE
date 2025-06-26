package com.hexaware.book.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.book.dto.BookDTO;
import com.hexaware.book.entity.Book;
import com.hexaware.book.mapper.BookMapper;
import com.hexaware.book.service.BookService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/books")
public class BookController {
	
	@Autowired
    private BookService bookService;
	
	
	@GetMapping("/getAllbooks")
    public ResponseEntity<List<BookDTO>> getAllBooks() {
		
		List<BookDTO> books = bookService.getAllBooks().stream().map(BookMapper::toDTO).collect(Collectors.toList());
        return ResponseEntity.ok(books);
    }
	
	 @PostMapping("/addbook")
	    public ResponseEntity<BookDTO> addBook(@Valid @RequestBody BookDTO bookDto) {
		 
		 Book b = bookService.addBook(BookMapper.toEntity(bookDto));       
		 return ResponseEntity.ok(BookMapper.toDTO(b));
	}
	 
	 @GetMapping("/getbook/{isbn}")
	    public ResponseEntity<BookDTO> getBook(@PathVariable String isbn) {
		 
		 Book b1 = bookService.getBookByIsbn(isbn);      
	     return ResponseEntity.ok(BookMapper.toDTO(b1));
	}
	 
	 @PutMapping("/updatebook/{isbn}")
	    public ResponseEntity<BookDTO> updateBook(@PathVariable String isbn, @Valid @RequestBody BookDTO bookDto) {
		 Book b2 = bookService.updateBook(isbn,BookMapper.toEntity(bookDto));
	     return ResponseEntity.ok(BookMapper.toDTO(b2));
	}
	 
	 @DeleteMapping("/deletebook/{isbn}")
	    public ResponseEntity<String> deleteBook(@PathVariable String isbn) {
		 bookService.deleteBook(isbn);
	     return ResponseEntity.ok("Book deleted with ISBN: " + isbn);
	}
	 
	 
	 
	 
	 

}
