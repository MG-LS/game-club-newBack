const mongoose = require("mongoose");

const catsSchema = mongoose.Schema({
  name: String,
});

const Cats = mongoose.model("Cats", catsSchema);

module.exports = Cats;
