const express = require("express");
const produitController = require("../controllers/produit.controller");
const router = express.Router();

router.get("/search/:id", produitController.getProductById);
router.get("/all", produitController.getAllProducts);
router.get("/filter", produitController.searchProduct);
router.post("/add", produitController.addProduct);
router.put("/edit/:identifiant", produitController.updateProduct);
router.delete("/delete/:id", produitController.deleteProduct);
router.delete("/softdelete/:id", produitController.softDeleteProduct);
router.patch("/restore/:id", produitController.restoreProduct);

module.exports = router;
