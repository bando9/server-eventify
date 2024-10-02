const Images = require("../../api/v1/images/model");

// cuma generate, udah di upload, blm di submit
const generateUrlImages = async (req) => {
  const result = `uploads/${req.file.filename}`;

  return result;
};

// sudah di submit, disimpan ke database
const createImages = async (req) => {
  const result = await Images.create({
    name: req.file
      ? `uploads/${req.file.filename}`
      : "uploads/avatar/default.jpeg",
  });

  return result;
};

module.exports = { createImages, generateUrlImages };
