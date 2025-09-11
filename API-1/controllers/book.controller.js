const Book = require("../models/book.model");

exports.getAllBooks = (req, res) => {};
exports.getBookById = (req, res) => {};
exports.addBook = async (req, res) => {
  let newBook = new Book(req.body);
  //newBook.isDeleted = false;
  try {
    let data = await newBook.save();
    res.status(201).json({
      message: `Le Livre ${data.title} a été bien ajouté`,
    });
  } catch (err) {
    res.status(500).json({
      message: "Problème avec MongoDB pour l'ajout",
    });
  }
};
exports.updateBook = (req, res) => {};
exports.deleteBook = (req, res) => {};
exports.searchBook = (req, res) => {};
exports.softDeleteBook = (req, res) => {};
exports.restoreBook = (req, res) => {};
