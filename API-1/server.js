const express = require("express");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/book.routes");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/books", bookRoutes);

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
