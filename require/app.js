//1ere manière d'importer
// const ops = require("./operations");

// console.log("==== Operations à faire ====");

// console.log("Addition 3 + 4 =", ops.additionner(3, 4));
// console.log("Produit 3 * 6 =", ops.multiplier(3, 4));
// console.log("Soustraction 13 - 4 = ", ops.soustraire(13, 4));

//2eme manière d'importer - destrcturation
const { additionner, multiplier, diviser: division } = require("./operations");
console.log("==== Operations à faire ====");

console.log("Addition 3 + 4 =", additionner(3, 4));
console.log("Produit 3 * 6 =", multiplier(3, 6));
console.log("Division 30 / 6 =", division(30, 6));
// console.log("Soustraction 13 - 4 = ", ops.soustraire(13, 4));

// let o = {
//   prenom: "nidhal",
//   nom: "jelassi",
//   annee: 2025,
//   skill: "javascript",
// };

// let { annee, skill } = o;
// console.log(annee, skill);
