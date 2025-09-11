const mongoose = require("mongoose");

require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://${process.env.username}:${process.env.password}@${process.env.projectname}.cpsst.mongodb.net/${process.env.dbname}?retryWrites=true&w=majority`
    );
    console.log("Connecté à MongoDB...");

    return conn;
  } catch (err) {
    console.log("Problème de connexion à MongoDB");
  }
};

module.exports = connectDB;
