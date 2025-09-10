const express = require("express");

const app = express();
app.use(express.json());
let produits = [
  {
    titre: "produit 1",
    prix: 320,
  },
  {
    titre: "produit 2",
    prix: 520,
  },
];

app.post("/add", (req, res) => {
  console.log(req.body);
  produits.push(req.body);
  res.json({ message: "Produit ajouté avec succès", listeProduits: produits });
});

app.get("/", (request, response) => {
  console.log(request);

  response.send("<h1>Premier test de réponse</h1>");
});

app.get("/fichier", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000...");
});
