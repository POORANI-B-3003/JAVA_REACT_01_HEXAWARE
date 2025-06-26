package com.hexaware.book.mapper;

import com.hexaware.book.dto.BookDTO;
import com.hexaware.book.entity.Book;

public class BookMapper {

    public static Book toEntity(BookDTO dto) {
        return new Book(dto.getIsbn(), dto.getTitle(), dto.getAuthor(), dto.getPublicationYear());
    }

    public static BookDTO toDTO(Book book) {
        BookDTO dto = new BookDTO();
        dto.setIsbn(book.getIsbn());
        dto.setTitle(book.getTitle());
        dto.setAuthor(book.getAuthor());
        dto.setPublicationYear(book.getPublicationYear());
        return dto;
    }
}
