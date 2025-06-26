package com.hexaware.book.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;



@Entity
@Table(name = "books")

public class Book {

    @Id
    @Column(name = "isbn", nullable = false, unique = true)
    @NotBlank(message = "ISBN is required")
    private String isbn;

    @Column(name = "title", nullable = false)
    @NotBlank(message = "Title is required")
    private String title;

    @Column(name = "author", nullable = false)
    @NotBlank(message = "Author is required")
    private String author;

    @Column(name = "publication_year", nullable = false)
    @Min(value = 1000, message = "Invalid year")
    @Max(value = 2100, message = "Invalid year")
    private int publicationYear;

    Book(){
    	
    }

	public Book(@NotBlank(message = "ISBN is required") String isbn,
			@NotBlank(message = "Title is required") String title,
			@NotBlank(message = "Author is required") String author,
			@Min(value = 1000, message = "Invalid year") @Max(value = 2100, message = "Invalid year") int publicationYear) {
		super();
		this.isbn = isbn;
		this.title = title;
		this.author = author;
		this.publicationYear = publicationYear;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public int getPublicationYear() {
		return publicationYear;
	}

	public void setPublicationYear(int publicationYear) {
		this.publicationYear = publicationYear;
	}

	@Override
	public String toString() {
		return "Book [isbn=" + isbn + ", title=" + title + ", author=" + author + ", publicationYear=" + publicationYear
				+ "]";
	}
    
    
}
