// app.js - Serveur Express avec EJS
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const PORT = 3000;

// Configuration EJS

// Configuration express-ejs-layouts

// Middleware pour lire les données d'un formulaire et du JSON

// Middleware pour variables par défaut

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
app.get("/", (req, res) => {});

app.get("/article/:id", (req, res) => {});

app.get("/new-article", (req, res) => {});

app.post("/new-article", (req, res) => {});

app.get("/author/:name", (req, res) => {});

// Route 404
app.use((req, res) => {});

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
