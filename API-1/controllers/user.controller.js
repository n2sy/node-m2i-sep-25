const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.register = async (req, res, next) => {
  try {
    let { name, username, password, role, email } = req.body;
    let existingUser = await User.findOne({ email: email });
    if (existingUser) {
      let error = new Error("Utilisateur existant");
      throw error;
    } else {
      let cryptedPassword = await bcrypt.hash(password, 10);
      let newUser = new User({
        name,
        username,
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

exports.login = async (req, res, next) => {
  let { identifiant, password } = req.body; // l'identifiant peut etre soit le username soit l'email
  try {
    let user = await User.findOne({
      $or: [{ email: identifiant }, { username: identifiant }],
      // email: identifiant,
    });

    if (!user) {
      let error = new Error("Username ou Email invalide");
      error.status = 404;
      throw error;
    } else {
      let pwdMatching = await bcrypt.compare(password, user.password);
      if (!pwdMatching) {
        let error = new Error("Mot de passe invalide");
        throw error;
      } else {
        // les mots de passes matchent
        const generatedToken = jwt.sign(
          {
            // name: user.name, role: user.role,
            id: user.id,
          },
          process.env.secretkey,
          {
            expiresIn: "1d",
          }
        );
        return res.json({
          message: "Utilisateur parfaitement authentifié",
          role: user.role,
          token: generatedToken,
        });
      }
    }
  } catch (err) {
    next(err);
  }
};
