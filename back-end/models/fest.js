const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FestSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "organisers",
  },
  festname: {
    type: String,
    required: true,
  },
  festtagline: {
    type: String,
    required: true,
  },
  institute: {
    type: String,
    required: true,
  },
  website: {
    type: String,
  },
  hacks: [
    {
      type: Schema.Types.ObjectId,
      ref: "events",
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Fest = mongoose.model("fests", FestSchema);
