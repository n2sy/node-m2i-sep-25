const express = require("express");
const ejs = require("ejs");
const app = express();
app.use(express.urlencoded());
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

var produitListe = [
  {
    nom: "Produit 1",
    prix: 1312,
  },
  {
    nom: "Produit 2",
    prix: 77,
  },
  {
    nom: "Produit 3",
    prix: 543,
  },
];

app.get("/", (req, res) => {
  res.render("product", {
    title: "Page de présentation des produits proposées",
    show: false,
    produits: produitListe,
  });
});

app.post("/add", (req, res) => {
  produitListe.push({
    nom: req.body.nom,
    prix: req.body.prix,
  });
  //res.redirect("/");
  res.render("product", {
    title: "Page de présentation des produits proposées",
    show: false,
    produits: produitListe,
    message: "Produit ajouté avec succès",
  });
});

app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
