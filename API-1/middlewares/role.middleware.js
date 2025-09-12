const isAdmin = (req, res, next) => {
  console.log("Je suis le isAdmin Middleware");
  next();
};

module.exports = isAdmin;
