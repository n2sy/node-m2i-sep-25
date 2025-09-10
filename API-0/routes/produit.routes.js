const express = require("express");

const router = express.Router();

router.get("/all");
router.get("/search/:id");
router.post("/add");
router.put("/edit/:identifiant");
router.delete("/delete/:id");
