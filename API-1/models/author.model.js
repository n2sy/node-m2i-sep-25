const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    prenom: {
      type: String,
      required: true,
    },
    nom: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Ajouter books comme un champ virtuel du modèle auteur
authorSchema.virtual("books", {
  ref: "Book", // Le modèle référence avec lequel on va faire l'association 1...N
  localField: "_id", // Le champ du modèle author qui servira de liaison entre les books et authors
  foreignField: "author", // Le champ dans le modèle référence (Book) qui contient la référence vers le author
  justOne: false, // true si une association 1...1, false si 1 ... N
});

module.exports = mongoose.model("Author", authorSchema);
