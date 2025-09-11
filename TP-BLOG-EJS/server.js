// app.js - Serveur Express avec EJS
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const PORT = 3000;

// Configuration EJS
const ejs = require("ejs");
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Configuration express-ejs-layouts
app.use(expressLayouts);
app.set("layout", "layout");

// Middleware pour lire les données d'un formulaire
app.use(express.urlencoded());

// Middleware pour variables par défaut
app.use((req, res, next) => {
  res.locals.title = "Exercice EJS";
  next();
});

// Données simulées (en mémoire)
let articles = [
  {
    id: 1,
    title: "Introduction à Express.js",
    content: "Express.js est un framework web minimaliste pour Node.js...",
    author: "Alice Dupont",
    date: new Date("2025-01-15"),
    tags: ["express", "nodejs", "web"],
  },
  {
    id: 2,
    title: "Templating avec EJS",
    content: "EJS permet de générer du HTML dynamique côté serveur...",
    author: "Bob Martin",
    date: new Date("2025-01-20"),
    tags: ["ejs", "templating", "html"],
  },
  {
    id: 3,
    title: "Middleware Express",
    content: "Les middlewares sont au cœur d'Express.js...",
    author: "Claire Dubois",
    date: new Date("2025-01-25"),
    tags: ["middleware", "express", "architecture"],
  },
];

// Routes
app.get("/", (req, res) => {
  const searchValue = req.query.search;
  let filtredArticles = articles;
  if (searchValue)
    filtredArticles = articles.filter((element) =>
      element.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  res.render("index", {
    articles: filtredArticles,
    search: "",
    totalArticles: filtredArticles.length,
  });
});

app.get("/article/:id", (req, res, next) => {
  const id = req.params.id;
  let articleCible = articles.find((a) => a.id == id);
  if (!articleCible) next();

  res.render("article", {
    article: articleCible,
  });
});

app.get("/new-article", (req, res) => {});

app.post("/new-article", (req, res) => {});

app.get("/author/:name", (req, res) => {});

// Route 404
app.use((req, res) => {
  res.status(404).render("error", {
    message: "Page non trouvée",
    statusCode: 404,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
