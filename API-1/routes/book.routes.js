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
const role = require("../middlewares/role.middleware");
const router = express.Router();

router.get("/", isAuth, getAllBooks);
router.get("/search", isAuth, searchBooks);
router.get("/:id", isAuth, getBookById);
router.post("/add", isAuth, role("admin"), addBook);
router.put("/edit/:id", isAuth, role("admin"), updateBook);
router.delete("/delete/:id", isAuth, role("admin"), deleteBook);
router.patch("/restore/:id", isAuth, role("admin"), restoreBook);

module.exports = router;
