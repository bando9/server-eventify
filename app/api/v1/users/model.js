const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nama harus diisi"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email harus diisi"],
  },
  password: {
    type: String,
    requiered: [true, "Password harus diisi"],
    minlength: 8,
  },
  role: {
    type: String,
    enum: ["admin", "organizer", "owner"],
    default: "admin",
  },
  organizer: {
    type: mongoose.Types.ObjectId,
    ref: "Organizer",
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  const User = this;
  if (User.isModified("password")) {
    User.password = await bcrypt.hash(User.password, 12);
  }
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", userSchema);
