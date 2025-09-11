const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

const startServer = async () => {
  try {
    await connectDB();
    const PORT = process.env.port || 3000;
    app.listen(PORT, () => {
      console.log(`Serveur démarré sur le port ${PORT}`);
    });
  } catch (err) {
    console.error("Problème pour démarrer le seveur");
  }
};

startServer();
