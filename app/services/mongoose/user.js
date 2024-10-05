const Users = require("../../api/v1/users/model");
const Organizers = require("../../api/v1/organizers/model");
const { BadRequestError } = require("../../errors");

const createOrganizer = async (req) => {
  const { organizer, role, password, confirmPassword, email, name } = req.body;

  if (password !== confirmPassword) {
    throw new BadRequestError("Password dan confirmPassword tidak cocok");
  }

  const checkEmail = await Users.findOne({ email });

  if (checkEmail) throw new BadRequestError("Email sudah terdaftar");

  const result = await Organizers.create({ organizer });

  const users = await Users.create({
    email,
    name,
    role,
    password,
    organizer: result._id,
  });

  delete users._doc.password;

  return users;
};

module.exports = createOrganizer;
