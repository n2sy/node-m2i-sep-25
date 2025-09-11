const express = require("express");
const {
  getAllAuthors,
  addAuthor,
} = require("../controllers/author.controller");
const router = express.Router();

router.get("/", getAllAuthors);
router.post("/add", addAuthor);

module.exports = router;
