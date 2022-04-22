const mongoose = require("mongoose");

const placeSchema = mongoose.Schema({
  name: String,
  boolean: {
    type: Boolean,
    default: false,
  },
  user: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
