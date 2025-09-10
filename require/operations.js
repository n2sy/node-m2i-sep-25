//1ere manière d'exporter

// function additionner(a, b) {
//   return a + b;
// }
// function soustraire(a, b) {
//   return a - b;
// }
// function multiplier(a, b) {
//   return a * b;
// }
// function diviser(a, b) {
//   return a / b;
// }

// module.exports = {
//   additionner,
//   soustraire,
//   multiplier,
//   diviser,
// };

//2ème manière d'exporter

exports.additionner = (a, b) => {
  return a + b;
};
exports.soustraire = (a, b) => {
  return a - b;
};
exports.multiplier = (a, b) => {
  return a * b;
};
exports.diviser = (a, b) => {
  return a / b;
};
