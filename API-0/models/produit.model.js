var Joi = require("joi");
var produitListe = [
  {
    id: 1,
    nom: "Produit 1",
    prix: 312,
    statut: "disponible",
  },
  {
    id: 2,
    nom: "Produit 2",
    prix: 77,
    statut: "indisponible",
  },
  {
    id: 3,
    nom: "Produit 3",
    prix: 543,
    statut: "epuise",
  },
  {
    id: 4,
    nom: "Produit 4",
    prix: 400,
    statut: "disponible",
  },
];

var produit_schema = Joi.object({
  nom: Joi.string().min(3).required(),
  prix: Joi.number().positive().min(50).max(2000).required(),
  statut: Joi.string(),
});

module.exports.produitListe = produitListe;
module.exports.produit_schema = produit_schema;
