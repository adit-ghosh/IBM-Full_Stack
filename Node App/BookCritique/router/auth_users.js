const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username) => {
    return users.some(user => user.username === username);
};

const authenticatedUser = (username, password) => {
    return users.some(user => user.username === username && user.password === password);
};

// Login
regd_users.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password required" });
    }
    if (!authenticatedUser(username, password)) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    const accessToken = jwt.sign({ username }, "fingerprint_customer", { expiresIn: '1h' });
    req.session.authorization = { accessToken };
    return res.status(200).json({ message: "Login successful" });
});

// Add/Modify Review (Task 8)
regd_users.put("/auth/review/:isbn", (req, res) => {
    const isbn = req.params.isbn;
    const review = req.body.review;
    const username = req.user.username;
    
    if (!books[isbn]) return res.status(404).json({ message: "Book not found" });
    
    books[isbn].reviews[username] = review;
    return res.status(200).json({ message: "Review added/updated successfully" });
});

// Delete Review (Task 9)
regd_users.delete("/auth/review/:isbn", (req, res) => {
    const isbn = req.params.isbn;
    const username = req.user.username;
    
    if (!books[isbn]) return res.status(404).json({ message: "Book not found" });
    if (!books[isbn].reviews[username]) return res.status(404).json({ message: "Review not found" });
    
    delete books[isbn].reviews[username];
    return res.status(200).json({ message: "Review deleted successfully" });
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
