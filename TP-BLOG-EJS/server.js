// app.js - Serveur Express avec EJS
const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const PORT = 3000;

// Configuration EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

// Configuration express-ejs-layouts
app.use(expressLayouts);
app.set("layout", "layout"); // nom de votre fichier layout

// Middleware
app.use(express.urlencoded({ extended: true }));

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
    date: new Date("2024-01-15"),
    tags: ["express", "nodejs", "web"],
  },
  {
    id: 2,
    title: "Templating avec EJS",
    content: "EJS permet de générer du HTML dynamique côté serveur...",
    author: "Bob Martin",
    date: new Date("2024-01-20"),
    tags: ["ejs", "templating", "html"],
  },
  {
    id: 3,
    title: "Middleware Express",
    content: "Les middlewares sont au cœur d'Express.js...",
    author: "Claire Dubois",
    date: new Date("2024-01-25"),
    tags: ["middleware", "express", "architecture"],
  },
];

// Routes
app.get("/", (req, res) => {
  const { search } = req.query;

  let filteredArticles = articles;
  if (search) {
    filteredArticles = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.content.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.render("index", {
    articles: filteredArticles,
    search: search || "",
    totalArticles: articles.length,
  });
});

app.get("/article/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return res.status(404).render("error", {
      message: "Article non trouvé",
      statusCode: 404,
    });
  }

  res.render("article", { article });
});

app.get("/new-article", (req, res) => {
  res.render("new-article");
});

app.post("/new-article", (req, res) => {
  const { title, content, author, tags } = req.body;

  if (!title || !content || !author) {
    return res.render("new-article", {
      error: "Tous les champs sont requis",
      formData: req.body,
    });
  }

  const newArticle = {
    id: Math.max(...articles.map((a) => a.id)) + 1,
    title,
    content,
    author,
    date: new Date(),
    tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
  };

  articles.push(newArticle);
  res.redirect("/");
});

app.get("/author/:name", (req, res) => {
  const authorName = req.params.name;
  const authorArticles = articles.filter(
    (article) => article.author.toLowerCase() === authorName.toLowerCase()
  );

  res.render("author", {
    authorName,
    articles: authorArticles,
  });
});

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
