const role = (roleDemande) => {
  return (req, res, next) => {
    if (req.roleUser !== roleDemande) {
      let error = new Error("Vous n'avez pas les permissions nécessaires");
      error.statusCode = 403;
      next(error);
    } else {
      next();
    }
  };
};

module.exports = role;
