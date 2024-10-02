const Talents = require("../../api/v1/talents");
const { checkingImage } = require("./images");

// import custom error not found dan bad request
const { NotFoundError, BadRequestError } = require("../../errors");

const getAllTalents = async (req) => {
  const { keyword } = req.query;

  let condition = {};
  if (keyword) {
    condition = { ...condition, name: { $regex: keyword, $option: "i" } };
  }

  const result = await Talents.find(condition)
    .populate({
      path: "image",
      select: "_id name",
    })
    .select("_id name role image");

  return result;
};

const createTalents = async (req) => {
  const { name, role, image } = req.body;

  // check apakah image ada di field image
  await checkingImage(image);

  const check = await Talents.findOne({ name });

  // cek, apakah nama talent sudah ada? jika sudah, akan mengirim message
  if (check) throw new BadRequestError("pembicara sudah terdaftar");

  const result = await Talents.create({ name, image, role });

  return result;
};

module.exports = {
  getAllTalents,
  createTalents,
};
