const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


// Register (Task 6)
public_users.post("/register", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password required" });
    }
    if (isValid(username)) {
        return res.status(400).json({ message: "Username already exists" });
    }
    users.push({ username, password });
    return res.status(200).json({ message: "User registered successfully" });
});

// Get all books (Task 1 & Task 10 - Async/Await)
public_users.get('/', async function (req, res) {
    try {
        const allBooks = await new Promise((resolve) => resolve(books));
        return res.status(200).json(allBooks);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

// Get by ISBN (Task 2 & Task 11 - Promises)
public_users.get('/isbn/:isbn', function (req, res) {
    const isbn = req.params.isbn;
    new Promise((resolve, reject) => {
        books[isbn] ? resolve(books[isbn]) : reject("Book not found");
    })
    .then(book => res.status(200).json(book))
    .catch(() => res.status(404).json({ message: "Book not found" }));
});

// Get by Author (Task 3 & Task 12 - Async/Await)
public_users.get('/author/:author', async function (req, res) {
    const author = req.params.author;
    try {
        const filteredBooks = await new Promise((resolve) => {
            const result = Object.entries(books)
                .filter(([_, book]) => book.author === author)
                .map(([isbn, book]) => ({ isbn, ...book }));
            resolve(result);
        });
        return filteredBooks.length 
            ? res.status(200).json(filteredBooks) 
            : res.status(404).json({ message: "No books found" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

// Get by Title (Task 4 & Task 13 - Promises)
public_users.get('/title/:title', function (req, res) {
    const title = req.params.title;
    new Promise((resolve) => {
        const result = Object.entries(books)
            .filter(([_, book]) => book.title === title)
            .map(([isbn, book]) => ({ isbn, ...book }));
        resolve(result);
    })
    .then(books => books.length 
        ? res.status(200).json(books) 
        : res.status(404).json({ message: "No books found" }))
    .catch(() => res.status(500).json({ message: "Internal server error" }));
});

// Get reviews (Task 5)
public_users.get('/review/:isbn', function (req, res) {
    const isbn = req.params.isbn;
    if (!books[isbn]) return res.status(404).json({ message: "Book not found" });
    return res.status(200).json(books[isbn].reviews);
});

module.exports.general = public_users;
