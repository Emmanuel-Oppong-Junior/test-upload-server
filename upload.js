const uploadImage = async (req, res) => {
  res.json({ ...req.file });
};

module.exports = uploadImage;
