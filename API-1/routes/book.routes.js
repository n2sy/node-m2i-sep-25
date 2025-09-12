const express = require("express");
const {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
  restoreBook,
  searchBooks,
} = require("../controllers/book.controller");
const isAuth = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/role.middleware");
const router = express.Router();

router.get("/", isAuth, getAllBooks);
router.get("/search", searchBooks);
router.get("/:id", getBookById);
router.post("/add", addBook);
router.put("/edit/:id", updateBook);
router.delete("/delete/:id", deleteBook);
router.patch("/restore/:id", restoreBook);

module.exports = router;
