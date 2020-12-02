const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrganiserSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "organisers",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Organiser = mongoose.model("organisers", OrganiserSchema);
