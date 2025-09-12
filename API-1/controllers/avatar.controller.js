exports.uploadAvatar = (req, res) => {
  console.log(req.file);
  return res.json({
    message: "Avatar uploadé avec succès",
    filename: req.file.filename,
  });
};
