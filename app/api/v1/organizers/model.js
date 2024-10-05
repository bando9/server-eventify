const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const organizerSchema = new mongoose.Schema(
  {
    organizer: {
      type: String,
      require: [true, "Penyelenggara harus diisi"],
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Organizer", organizerSchema);
