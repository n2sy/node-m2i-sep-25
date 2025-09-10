const { produitListe, produit_schema } = require("../models/produit.model");

exports.getAllProducts = (req, res) => {
  res.json({
    message: "Liste des produits récupérée avec succès",
    produits: produitListe,
  });
};
exports.getProductById = (req, res) => {};
exports.addProduct = (req, res) => {};
exports.updateProduct = (req, res) => {};
exports.deleteProduct = (req, res) => {};
