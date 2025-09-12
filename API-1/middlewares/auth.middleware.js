const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

require("dotenv").config();

const isAuth = async (req, res, next) => {
  let authValue = req.header("Authorization");
  if (!authValue) {
    return res.status(401).json({ message: "Utilisateur non authentifié" });
  }
  let tokenRecu = authValue.split(" ")[1];
  //let token = authValue.replace("Bearer ", "");
  try {
    const tokenDecode = jwt.verify(tokenRecu, process.env.secretkey);
    console.log(tokenDecode);
    let u = await User.findById(tokenDecode.id);
    req.roleUser = u.role;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = isAuth;
