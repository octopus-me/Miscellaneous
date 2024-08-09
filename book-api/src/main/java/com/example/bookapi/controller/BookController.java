package com.example.bookapi.controller;

import com.example.bookapi.model.Book;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/api/books")
public class BookController {

    private final List<Book> books = new ArrayList<>();
    private final AtomicLong counter = new AtomicLong();

    // Get all books
    @GetMapping
    public List<Book> getBooks() {
        return books;
    }

    // Get a book by ID
    @GetMapping("/{id}")
    public Book getBookById(@PathVariable long id) {
        return books.stream()
                .filter(book -> book.getId() == id)
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Book not found"));
    }

    // Add a new book
    @PostMapping
    public Book addBook(@RequestBody Book newBook) {
        long id = counter.incrementAndGet();
        newBook.setId(id);
        books.add(newBook);
        return newBook;
    }

    // Update an existing book
    @PutMapping("/{id}")
    public Book updateBook(@PathVariable long id, @RequestBody Book updatedBook) {
        Book existingBook = books.stream()
                .filter(book -> book.getId() == id)
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Book not found"));

        existingBook.setTitle(updatedBook.getTitle());
        existingBook.setAuthor(updatedBook.getAuthor());
        existingBook.setIsbn(updatedBook.getIsbn());
        return existingBook;
    }

    // Delete a book by ID
    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable long id) {
        books.removeIf(book -> book.getId() == id);
    }
}
