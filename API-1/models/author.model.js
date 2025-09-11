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

module.exports = mongoose.model("Author", authorSchema);
