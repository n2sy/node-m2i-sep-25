const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

app.get("/test", (request, response) => {
  console.log(request);

  response.send("<h1>Premier test de réponse</h1>");
});

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});
app.post("/new", (request, response) => {
  console.log(request.body);

  produits.push(request.body);
  response.send(
    `<h3> Produit (${request.body.titre} - ${request.body.prix}) ajouté avec succès</h3>`
  );
});

app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000...");
});
