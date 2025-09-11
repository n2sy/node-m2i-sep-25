const Book = require("../models/book.model");

exports.getAllBooks = async (req, res, next) => {
  let filter = req.query.by;
  try {
    let data = await Book.find({
      title: new RegExp(filter, "i"),
    }).notDeleted();
    return res.json(data);
  } catch (err) {
    next(err);
  }
};
exports.getBookById = async (req, res, next) => {
  try {
    let b = await Book.findById(req.params.id).notDeleted();
    if (!b) {
      let error = new Error("Aucun Livre n'existe avec cet id");
      error.statusCode = 404;
      throw error;
    }
    return res.json({ message: "Livre trouvé", livre: b });
  } catch (err) {
    return next(err);
  }
};
exports.addBook = async (req, res, next) => {
  let newBook = new Book(req.body);
  //newBook.isDeleted = false;
  try {
    let data = await newBook.save();
    return res.status(201).json({
      message: `Le Livre ${data.title} a été bien ajouté`,
    });
  } catch (err) {
    next(err);
  }
};
exports.updateBook = async (req, res, next) => {
  try {
    let data = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: false,
    }).notDeleted();
    if (!data) {
      let error = new Error(
        "Aucun Livre n'existe avec cet id pour être mise à jour"
      );
      error.statusCode = 404;
      throw error;
    }
    return res.json({ message: "Livre mis à jour avec succès", data });
  } catch (err) {
    next(err);
  }
};
exports.deleteBook = async (req, res, next) => {
  try {
    let b = await Book.findById(req.params.id).notDeleted();
    if (!b) {
      let error = new Error("Aucun Livre (non supprimé) n'existe avec cet id");
      error.statusCode = 404;
      throw error;
    }
    b.isDeleted = true;
    b.deleteAt = new Date();
    b.save();
    return res.json({ message: "Livre supprimé avec succès" });
  } catch (err) {
    next(err);
  }
};
exports.searchBook = (req, res) => {};
exports.restoreBook = (req, res) => {};
