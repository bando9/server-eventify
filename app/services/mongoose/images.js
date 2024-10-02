const Images = require("../../api/v1/images/model");
const { NotFoundError } = require("../../errors");

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

const checkingImage = async (id) => {
  const result = await Images.findOne({ _id: id });
  console.log(result);

  if (!result) throw new NotFoundError(`Tidak ada Gambar dengan id: ${id}`);

  return result;
};

module.exports = { createImages, generateUrlImages, checkingImage };
