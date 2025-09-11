const Author = require("../models/author.model");

exports.getAllAuthors = async (req, res, next) => {
  try {
    let data = await Author.find({});
    return res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.addAuthor = async (req, res, next) => {
  let newAuthor = new Author(req.body);
  //newAuthor.isDeleted = false;
  try {
    let data = await newAuthor.save();
    return res.status(201).json({
      message: `L'auteur ${data.prenom} ${data.nom} a été bien ajouté`,
    });
  } catch (err) {
    next(err);
  }
};
