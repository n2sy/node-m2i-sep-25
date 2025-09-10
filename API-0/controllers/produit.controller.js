const { produitListe, produit_schema } = require("../models/produit.model");

exports.getAllProducts = (req, res) => {
  res.json({
    message: "Liste des produits récupérée avec succès",
    produits: produitListe,
  });
};
exports.getProductById = (req, res) => {
  let selectedProduit = produitListe.find(
    (element) => element.id == req.params.id
  );
  if (!selectedProduit)
    res.status(404).json({
      message: `Aucun produit n'existe avec cet id`,
    });
  res.status(202).json({
    message: "Produit trouvé",
    produit: selectedProduit,
  });
};
exports.addProduct = (req, res) => {
  let newProduct = req.body;
  let validate_result = produit_schema.validate(newProduct);
  if (validate_result.error)
    res.status(400).json({
      message: `Vérifiez vos données d'entrée`,
    });
  newProduct.id = crypto.randomUUID();
  produitListe.push(req.body);
  res.status(202).json({
    message: "Produit ajouté avec succès",
    listeProduits: produitListe,
  });
};
exports.updateProduct = (req, res) => {
  let selectedId = req.params.identifiant;
  let i = produitListe.findIndex((element) => element.id == selectedId);
  if (i == -1)
    res.status(404).json({
      message: `Aucun produit n'existe avec cet id`,
    });
  else {
    req.body.id = selectedId;
    produitListe[i] = req.body;
    let message = "Produit mis à jour";
    res.json({
      message,
      produits: produitListe,
    });
  }
};
exports.deleteProduct = (req, res) => {
  let selectedId = req.params.id;
  let i = produitListe.findIndex((element) => element.id == selectedId);
  if (i == -1)
    res.status(404).json({
      message: `Aucun produit n'existe avec cet id`,
    });
  else {
    produitListe.splice(i, 1);

    let message = "Produit supprimé";
    res.json({
      message,
      produits: produitListe,
    });
  }
};
