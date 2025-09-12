const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

require("dotenv").config();

exports.register = async (req, res, next) => {
  try {
    let { name, password, role, email } = req.body;
    let existingUser = await User.findOne({ email: email });
    if (existingUser) {
      let error = new Error("Utilisateur existant");
      throw error;
    } else {
      let cryptedPassword = await bcrypt.hash(password, 10);
      let newUser = new User({
        name,
        email, // ou email : email
        password: cryptedPassword,
        role: role || "user",
      });
      let reponse = await newUser.save();
      return res.json({
        message: "Utilisateur créé avec succès",
        utilisateur: reponse,
      });
    }
  } catch (err) {
    next(err);
  }
};

exports.login = (req, res) => {};
