const express = require("express");
const produitController = require("../controllers/produit.controller");
const router = express.Router();

router.get("/all", produitController.getAllProducts);
router.get("/search/:id", produitController.getProductById);
router.post("/add", produitController.addProduct);
router.put("/edit/:identifiant", produitController.updateProduct);
router.delete("/delete/:id", produitController.deleteProduct);

module.exports = router;
