const express = require("express");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/book.routes");
const authorRoutes = require("./routes/author.routes");
const avatarRoutes = require("./routes/avatar.routes");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/avatars", express.static("covers"));
app.use("/images/upload", avatarRoutes);
app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);

//Le middleware de gestion des erreurs doit toujours être le dernier
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  console.log("On se retrouve dans le middleware de gestion des erreurs ");

  res.status(status).json({
    message,
  });
});

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
