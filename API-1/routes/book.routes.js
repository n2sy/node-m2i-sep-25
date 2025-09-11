const express = require("express");
const {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/book.controller");
const router = express.Router();

router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.post("/add", addBook);
router.put("/edit/:id", updateBook);
router.delete("delete/:id", deleteBook);

module.exports = router;
