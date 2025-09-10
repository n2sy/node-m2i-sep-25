var Joi = require("joi");
var produitListe = [
  {
    id: 1,
    nom: "Produit 1",
    prix: 1312,
    statut: "disponible",
    isDeleted: false,
  },
  {
    id: 2,
    nom: "Produit 2",
    prix: 77,
    statut: "indisponible",
    isDeleted: false,
  },
  {
    id: 3,
    nom: "Produit 3",
    prix: 543,
    statut: "epuise",
    isDeleted: false,
  },
  {
    id: 4,
    nom: "Produit 4",
    prix: 400,
    statut: "disponible",
    isDeleted: false,
  },
];

var produit_schema = Joi.object({
  nom: Joi.string().min(3).required(),
  prix: Joi.number().positive().min(50).max(2000).required(),
  statut: Joi.string().valid("disponible", "indisponible", "epuise").required(),
});

module.exports.produitListe = produitListe;
module.exports.produit_schema = produit_schema;
