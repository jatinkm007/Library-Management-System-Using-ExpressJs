const express = require("express");

const { books } = require("../data/books.json");

const {users} = require("../data/users.json");

const { UserModel, BookModel } = require("../models");

const { getAllBooks, getSingleBookById, getAllIssuedBooks, addNewBook, updateBookById, deleteBookById } = require("../controllers/book-controller");

const router = express.Router();

router.get('/', getAllBooks)

router.get('/:id', getSingleBookById)  

router.post('/', addNewBook);

router.put('/:id', updateBookById);

router.delete('/:id', deleteBookById);

router.get('/issued/for-users', getAllIssuedBooks);

module.exports = router;